package entity

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID           uuid.UUID      `json:"id" gorm:"type:uuid;primaryKey"`
	Email        string         `json:"email" gorm:"size:255;uniqueIndex;not null"`
	Phone        *string        `json:"phone,omitempty" gorm:"size:20;uniqueIndex"` // nullable
	PasswordHash string         `json:"-" gorm:"size:255;not null"`
	
	// Личные данные
	FirstName    string         `json:"first_name" gorm:"size:100"`
	LastName     string         `json:"last_name" gorm:"size:100"`
	Avatar       *string        `json:"avatar,omitempty" gorm:"size:500"` // URL к S3
	
	// Статусы
	IsActive     bool           `json:"is_active" gorm:"default:true"`
	IsVerified   bool           `json:"is_verified" gorm:"default:false"`
	Role         string         `json:"role" gorm:"size:20;default:'user'"` // user, admin
	
	// OAuth
	GoogleID     *string        `json:"-" gorm:"size:255;uniqueIndex"`
	GithubID     *string        `json:"-" gorm:"size:255;uniqueIndex"`
	
	// Timestamps
	LastLoginAt  *time.Time     `json:"last_login_at"`
	CreatedAt    time.Time      `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt    time.Time      `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt    gorm.DeletedAt `json:"-" gorm:"index"`
}

func (User) TableName() string {
	return "users"
}

func (u *User) BeforeCreate(tx *gorm.DB) error {
	if u.ID == uuid.Nil {
		u.ID = uuid.New()
	}
	return nil
}

// Методы
func (u *User) UpdateLastLogin() {
	now := time.Now()
	u.LastLoginAt = &now
}

func (u *User) Verify() {
	u.IsVerified = true
}

func (u *User) Deactivate() {
	u.IsActive = false
}

func (u *User) IsAdmin() bool {
	return u.Role == "admin"
}

func (u *User) FullName() string {
	if u.FirstName == "" && u.LastName == "" {
		return u.Email
	}
	return u.FirstName + " " + u.LastName
}