package entity

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID           uuid.UUID      `json:"id" gorm:"type:uuid;primaryKey"`
	Name         string         `json:"name" gorm:"size:100;not null"`
	Phone        string         `json:"phone" gorm:"size:20;uniqueIndex;not null"`
	Email        string         `json:"email" gorm:"size:255;uniqueIndex;not null"`
	PasswordHash string         `json:"-" gorm:"size:255;not null"`
	IsActive     bool           `json:"is_active" gorm:"default:true"`
	IsVerified   bool           `json:"is_verified" gorm:"default:false"`
	LastLoginAt  *time.Time     `json:"last_login_at"`
	CreatedAt    time.Time      `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt    time.Time      `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt    gorm.DeletedAt `json:"-" gorm:"index"`
}

func (User) TableName() string {
	return "users"
}

// BeforeCreate гарантирует, что UUID всегда назначен
func (u *User) BeforeCreate(tx *gorm.DB) error {
	if u.ID == uuid.Nil {
		u.ID = uuid.New()
	}
	return nil
}

// Дополнительные методы
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