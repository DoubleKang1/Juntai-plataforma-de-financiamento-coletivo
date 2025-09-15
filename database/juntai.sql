CREATE DATABASE juntai;
USE juntai;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(60) NOT NULL,
	password_digest VARCHAR(100) NOT NULL,
    user_type ENUM('Legal person', 'Natural person') NOT NULL,
    address VARCHAR(100) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    house_number MEDIUMINT NOT NULL,
    neighborhood VARCHAR(100),
    city VARCHAR(60) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    image_url VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE natural_person(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(14) NOT NULL,
    birth_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE legal_person(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(18) NOT NULL,
    state_registration VARCHAR(15) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE campaigns(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    goal_value DECIMAL(10,2) NOT NULL,
    price_collected DECIMAL(10,2) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME,
    age_range TINYINT UNSIGNED NOT NULL,
    status VARCHAR(20) NOT NULL,
    url VARCHAR(1024) NOT NULL,
    image_url VARCHAR(500),
    media_url_1 VARCHAR(500),
    media_url_2 VARCHAR(500),
    media_url_3 VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE category(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE campaign_category(
	id INT PRIMARY KEY AUTO_INCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    campaign_id INT NOT NULL,
    category_id INT NOT NULL,
    UNIQUE (campaign_id, category_id),
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE rewards(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    delivery_date DATE NOT NULL,
    image VARCHAR(500),
    media_url_1 VARCHAR(500),
    media_url_2 VARCHAR(500),
    media_url_3 VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    campaign_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
);

CREATE TABLE donations(
	id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10,2) NOT NULL,
	status VARCHAR(20) NOT NULL,
    recurrency BOOLEAN NOT NULL,
    duration VARCHAR(20) NOT NULL,
    donation_date DATETIME NOT NULL,
    payment_method VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    campaign_id INT NOT NULL,
    reward_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
    FOREIGN KEY (reward_id) REFERENCES rewards(id)
);
