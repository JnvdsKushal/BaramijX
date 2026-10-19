-- ================================================================
-- schema.sql — Run this once in phpMyAdmin on Hostinger
-- Steps: hPanel → MySQL Databases → phpMyAdmin → Select DB → SQL tab → paste → Go
-- ================================================================

-- 1. Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    name          VARCHAR(120)    NOT NULL,
    email         VARCHAR(255)    NOT NULL,
    phone         VARCHAR(30)     DEFAULT NULL,
    company       VARCHAR(120)    DEFAULT NULL,
    message       TEXT            NOT NULL,
    referral      VARCHAR(60)     DEFAULT NULL,
    ip_address    VARCHAR(45)     DEFAULT NULL,
    user_agent    VARCHAR(500)    DEFAULT NULL,
    created_at    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Quote Requests
CREATE TABLE IF NOT EXISTS quote_requests (
    id                   INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    name                 VARCHAR(120)    NOT NULL,
    email                VARCHAR(255)    NOT NULL,
    phone                VARCHAR(30)     NOT NULL,
    company              VARCHAR(120)    NOT NULL,
    project_name         VARCHAR(200)    NOT NULL,
    service_category     VARCHAR(60)     NOT NULL,
    description          TEXT            NOT NULL,
    budget_range         VARCHAR(60)     NOT NULL,
    timeline             VARCHAR(40)     NOT NULL,
    additional_info      TEXT            DEFAULT NULL,
    supporting_document  VARCHAR(255)    DEFAULT NULL,   -- relative path to uploaded file (pdf/doc/docx)
    ip_address           VARCHAR(45)     DEFAULT NULL,
    user_agent           VARCHAR(500)    DEFAULT NULL,
    status               ENUM('new','reviewed','quoted','closed') NOT NULL DEFAULT 'new',
    created_at           DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- !! PRODUCTION MIGRATION !! Run this if the table already exists:
-- ALTER TABLE quote_requests
--   ADD COLUMN supporting_document VARCHAR(255) DEFAULT NULL
--   AFTER additional_info;


-- 3. Newsletter Subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    email         VARCHAR(255)    NOT NULL,
    ip_address    VARCHAR(45)     DEFAULT NULL,
    subscribed_at DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active     TINYINT(1)      NOT NULL DEFAULT 1,
    PRIMARY KEY (id),
    UNIQUE KEY uq_email (email),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
