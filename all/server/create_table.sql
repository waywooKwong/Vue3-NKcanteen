-- 创建预约信息表
create table reservation(
	id int auto_increment primary key, --预约id
    canteen varchar(255), -- 餐厅名称
    floor varchar(255), --楼层
    seatgroup varchar(255), --座位分区
    seatnumber varchar(255), --座位号
    time int --预约时间
);

-- 创建窗口表
CREATE TABLE windows (
    window_id VARCHAR(50) PRIMARY KEY,
    canteen VARCHAR(100),
    floor INT,
    manager_phone VARCHAR(20),
    manager_email VARCHAR(100),
    manager_wechat VARCHAR(50),
    window_name VARCHAR(100)
);

-- 创建菜单表
CREATE TABLE front_menu (
    win_id VARCHAR(255) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    image VARCHAR(255) NOT NULL
);

-- 创建订单表
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  window_id VARCHAR(255),
  dish_name VARCHAR(255),
  quantity INT,
  total_price DECIMAL(10, 2)
);

-- 创建管理员表
create table admin(
	adminname varchar(50),
    password varchar(50),
    windowID varchar(50),
    primary key(adminname)
);


-- 创建学生表
create table user(
	username varchar(50),
    password varchar(50),
    primary key(username)
);

