-- CUSTOMERS
INSERT INTO customers (name, email, password, phone, is_activated, customer_code, customer_name, created_date, modified_date, role, security_role)
VALUES
    ('김민준', 'john@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1234-4560', true, '3GPOA', 'POSCO Asia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,'CUSTOMER', 'USER'),
    ('박도윤', 'jane@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9876-3210', true, '2BR', 'BORAM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이서윤', 'bob@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-55555', true, '3DR', 'DURI', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('김하윤', 'michael@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-7777', true, '4GG', 'GEUMGANG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이지호', 'jiho@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8888-7777', true, '1SS', 'SESIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('박채원', 'chaewon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9999-7777', true, '6HW', 'HWAIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER');

-- MANAGERS
INSERT INTO managers (name, email, password, phone, is_activated, emp_no, role, department, created_date, modified_date, security_role)
VALUES
    ('박수아', 'alice@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2222-3333', true, 'EMP001', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이현우', 'bob@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP002', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김우진', 'charlie@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('신보나', 'bona@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'QUALITY', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최민기', 'danny@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER');

-- INQUIRY
INSERT INTO inquiry (user_id, sales_manager_id, quality_manager_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, file_name, file_path, response_deadline, is_activated, is_favorite, created_date, modified_date)
VALUES
    (1, null, null, 'USA', 'POA', 'POSCO Asia', 'QUOTE_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-09-01', '빠른 회신 부탁합니다', 'file1.pdf', 'file1Name', '2024-09-10', true, true, '2024-09-01 09:15:22.123456+00', '2024-09-01 09:15:22.123456+00'),
    (2, null, null, 'JAPAN', 'BR', 'BORAM', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'SUBMIT', '2024-09-02', '이전 요청을 참고해주세요', 'file2.pdf', 'file2Name', '2024-09-15', true, true, '2024-09-05 11:42:18.123456+00', '2024-09-05 11:42:18.123456+00'),
    (3, 1, 2, 'GERMANY', 'DR', 'DURI', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_COMPLETED', '2024-09-03', '기한 내에 납부 바람', 'file3.pdf', 'file3Name', '2024-09-20', true, false, '2024-09-10 13:27:55.123456+00', '2024-09-20 16:38:41.123456+00'),
    (4, 5, 4, 'KOREA', 'GG', 'GEUMGANG', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-09-04', null, 'file4.pdf', 'file4Name', '2024-09-21', true, false, '2024-09-15 10:05:33.123456+00', '2024-09-25 15:19:27.123456+00'),
    (5, 3, null, 'KOREA', 'SS', 'SESIN', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_REQUEST', '2024-09-04', '후판 품질에 신경써주세요', 'file4.pdf', 'file5Name', '2024-09-21', true, false, '2024-09-20 14:53:09.123456+00', '2024-09-25 09:34:58.123456+00'),
    (1, 5, 4, 'CANADA', 'CC', 'CANCO', 'QUOTE_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'CAR', 'FINAL_REVIEW_COMPLETED', '2024-09-05', '빠른 납품 필요', 'file6.pdf', 'file6Name', '2024-09-22', true, true, '2024-09-25 08:47:12.123456+00', '2024-10-05 11:23:45.123456+00'),
    (2, 3, null, 'CHINA', 'CN', 'CHINAPRO', 'QUOTE_INQUIRY', 'MACHINERY', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-09-06', '최고 품질을 원합니다', 'file7.pdf', 'file7Name', '2024-09-25', true, false, '2024-09-30 15:39:28.123456+00', '2024-10-01 10:56:32.123456+00'),
    (3, 1, null, 'FRANCE', 'FR', 'FRANCO', 'COMMON_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-09-07', '수출용', 'file8.pdf', 'file8Name', '2024-09-30', true, false, '2024-10-01 12:18:44.123456+00', '2024-10-05 14:07:19.123456+00'),
    (4, 5, null, 'KOREA', 'HH', 'HANHWA', 'QUOTE_INQUIRY', 'VESSEL', '(주)포스코', 'COLD_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-09-08', '배타적 계약', 'file9.pdf', 'file9Name', '2024-10-01', true, false, '2024-10-05 09:29:51.123456+00', '2024-10-15 13:44:38.123456+00'),
    (5, 3, null, 'GERMANY', 'MG', 'MEGA', 'QUOTE_INQUIRY', 'PIPE', '(주)포스코', 'THICK_PLATE', 'FIRST_REVIEW_COMPLETED', '2024-09-09', '안정적인 공급 요청', 'file10.pdf', 'file10Name', '2024-10-05', true, false, '2024-10-10 11:08:17.123456+00', '2024-10-15 16:52:03.123456+00'),
    (1, 1, 4, 'USA', 'POA', 'POSCO Asia', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'QUALITY_REVIEW_RESPONSE', '2024-09-10', '기한 내 작업 완료', 'file11.pdf', 'file11Name', '2024-10-10', true, true, '2024-10-15 10:35:49.123456+00', '2024-10-20 15:41:26.123456+00'),
    (2, 1, null, 'CHINA', 'CN', 'CHINAPRO', 'QUOTE_INQUIRY', 'LOW_CARBON', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-09-11', '견적 요청', 'file12.pdf', 'file12Name', '2024-10-15', true, false, '2024-10-20 14:22:37.123456+00', '2024-10-21 09:17:55.123456+00'),
    (3, 5, null, 'JAPAN', 'BR', 'BORAM', 'QUOTE_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-09-12', '고객의견 반영', 'file13.pdf', 'file13Name', '2024-10-20', true, true, '2024-10-25 13:49:22.123456+00', '2024-10-28 11:33:08.123456+00'),
    (4, 3, 4, 'CANADA', 'CC', 'CANCO', 'COMMON_INQUIRY', 'KITCHEN', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_RESPONSE', '2024-09-13', '주문 변경 가능', 'file14.pdf', 'file14Name', '2024-10-25', true, false, '2024-10-28 15:56:41.123456+00', '2024-10-30 10:28:34.123456+00'),
    (5, 3, null, 'KOREA', 'GG', 'GEUMGANG', 'QUOTE_INQUIRY', 'PLATING', '(주)포스코', 'THICK_PLATE', 'RECEIPT', '2024-09-14', '긴급 요청', 'file15.pdf', 'file15Name', '2024-10-30', true, true, '2024-09-28 11:22:37.123456+00', '2024-09-28 14:22:37.123456+00');

-- CAR_LINE_ITEMS
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, expected_delivery_date, transportation_destination, order_edge, tolerance, annual_cost, is_activated, created_date, modified_date)
VALUES
    (1, 'GWANGYANG', 'SEDAN', 'ASTM',  'Hyundai Sonata', '엔진 컨트롤 유닛', 'DASH_PANEL', '2mm', '1500mm', 100, '2023-09-01', '서울', 'Mill Edge', '±0.1mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ANSI',  'Kia Sorento', '트랜스퍼 케이스', 'FLOOR_PANEL', '3mm', '1800mm', 200, '2023-09-05', '부산', 'Mill Edge', '±0.2mm', '$20,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'TRUCK', 'ANSI',  'Ford F-150', '리어 액슬', 'TRUNK_LID', '2.5mm', '1650mm', 150, '2023-09-10', '인천', 'Mill Edge', '±0.15mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'SEDAN', 'ASTM',  'Mercedes C-Class', '브레이크 패드', 'DOOR_PANEL', '1.8mm', '1550mm', 120, '2023-10-01', '대전', 'Mill Edge', '±0.05mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SUV', 'ANSI',  'Land Rover Discovery', '연료 탱크', 'DASH_PANEL', '4mm', '2000mm', 180, '2023-10-05', '울산', 'Mill Edge', '±0.25mm', '$25,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'TRUCK', 'ASTM',  'Mitsubishi Fuso', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1750mm', 250, '2023-10-10', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'SEDAN', 'ANSI',  'Toyota Corolla', '서브프레임', 'TRUNK_LID', '2.2mm', '1600mm', 90, '2023-11-01', '전주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'SUV', 'ASTM',  'Honda CR-V', '라디에이터', 'DOOR_PANEL', '3.8mm', '1850mm', 170, '2023-11-10', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'TRUCK', 'ASTM',  'MAN TGS', '변속기', 'FLOOR_PANEL', '4.2mm', '2100mm', 200, '2023-11-15', '춘천', 'Slit Edge', '±0.2mm', '$30,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SEDAN', 'ASTM',  'BMW 3 Series', '에어백 모듈', 'DOOR_PANEL', '2.3mm', '1600mm', 110, '2023-12-01', '서울', 'Mill Edge', '±0.1mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'SUV', 'ANSI',  'Jeep Grand Cherokee', '엔진 마운트', 'DASH_PANEL', '4.5mm', '2050mm', 190, '2023-12-05', '부산', 'Slit Edge', '±0.3mm', '$27,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'TRUCK', 'ASTM',  'Volvo FH', '연료 인젝터', 'FLOOR_PANEL', '5mm', '2250mm', 250, '2023-12-10', '인천', 'Mill Edge', '±0.25mm', '$35,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SEDAN', 'ANSI',  'Audi A4', '카탈리틱 컨버터', 'TRUNK_LID', '2.8mm', '1700mm', 130, '2024-01-01', '대전', 'Slit Edge', '±0.15mm', '$14,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'SUV', 'ASTM',  'Mazda CX-5', '점화 코일', 'DOOR_PANEL', '3.7mm', '1900mm', 160, '2024-01-05', '울산', 'Mill Edge', '±0.2mm', '$23,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'TRUCK', 'ANSI',  'Scania R-Series', '터보차저', 'DASH_PANEL', '4.8mm', '2150mm', 210, '2024-01-10', '광주', 'Slit Edge', '±0.3mm', '$28,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'SEDAN', 'ASTM',  'Lexus IS', '산소 센서', 'FLOOR_PANEL', '3mm', '1650mm', 140, '2024-02-01', '전주', 'Mill Edge', '±0.1mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'SUV', 'ANSI',  'Chevrolet Tahoe', '스티어링 휠', 'TRUNK_LID', '2.9mm', '1750mm', 180, '2024-02-05', '청주', 'Slit Edge', '±0.25mm', '$19,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'TRUCK', 'ASTM',  'DAF XF', '배터리 모듈', 'DOOR_PANEL', '4mm', '2000mm', 230, '2024-02-10', '춘천', 'Mill Edge', '±0.2mm', '$26,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'SEDAN', 'ANSI',  'Tesla Model 3', '디퍼렌셜', 'DASH_PANEL', '3.5mm', '1850mm', 150, '2024-03-01', '서울', 'Slit Edge', '±0.1mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ASTM',  'Subaru Outback', '서스펜션', 'FLOOR_PANEL', '2.6mm', '1600mm', 170, '2024-03-05', '부산', 'Mill Edge', '±0.15mm', '$21,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'TRUCK', 'ANSI',  'Iveco Stralis', '디젤 엔진', 'TRUNK_LID', '5.2mm', '2200mm', 240, '2024-03-10', '인천', 'Slit Edge', '±0.3mm', '$31,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SEDAN', 'ASTM',  'Nissan Altima', '브레이크 디스크', 'DOOR_PANEL', '2.7mm', '1700mm', 125, '2024-04-01', '대전', 'Mill Edge', '±0.1mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SUV', 'ANSI',  'Ford Explorer', '퓨즈 박스', 'DASH_PANEL', '3.4mm', '1950mm', 195, '2024-04-05', '울산', 'Slit Edge', '±0.2mm', '$24,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'TRUCK', 'ASTM',  'Kenworth T680', '밸브 스프링', 'FLOOR_PANEL', '4.6mm', '2100mm', 220, '2024-04-10', '광주', 'Mill Edge', '±0.25mm', '$29,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SEDAN', 'ANSI',  'Volkswagen Passat', '인젝터 펌프', 'TRUNK_LID', '3.1mm', '1800mm', 140, '2024-05-01', '전주', 'Slit Edge', '±0.1mm', '$16,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'SUV', 'ASTM',  'Hyundai Tucson', '차량 안정성 제어 장치', 'DOOR_PANEL', '4.3mm', '2000mm', 180, '2024-05-05', '청주', 'Mill Edge', '±0.3mm', '$22,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'TRUCK', 'ANSI',  'Mercedes Actros', '리어 서스펜션', 'DASH_PANEL', '5mm', '2250mm', 230, '2024-05-10', '춘천', 'Slit Edge', '±0.2mm', '$32,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'SEDAN', 'ASTM',  'Honda Accord', '전자 제어 유닛', 'FLOOR_PANEL', '2.4mm', '1750mm', 120, '2024-06-01', '서울', 'Mill Edge', '±0.15mm', '$14,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- COLDROLLED_LINE_ITEMS
INSERT INTO coldrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, sleeve_thickness, tensile_strength, elongation_ratio, hardness, is_activated, created_date, modified_date)
VALUES
    (4, 'CR', 'JS_SI123', '파이프 소재', '1.5mm', '1200mm', 500, '2024-09-15', 'Mill Edge', '500mm', '600mm', '2mm', '240MPa',  '15%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI456', '자동차 부품', '2.0mm', '1300mm', 600, '2024-10-01', 'Slit Edge', '520mm', '620mm', '2.5mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI789', '가전제품 외장재', '1.2mm', '1100mm', 700, '2024-10-15', 'Mill Edge', '480mm', '580mm', '1.8mm', '230MPa',  '20%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI123', '건축용 내장재', '2.5mm', '1400mm', 400, '2024-11-01', 'Slit Edge', '540mm', '640mm', '3mm', '250MPa',  '16%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI456', '가구 부품', '1.8mm', '1250mm', 550, '2024-11-20', 'Mill Edge', '510mm', '610mm', '2.2mm', '255MPa',  '17%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI789', '기계 커버', '2.2mm', '1350mm', 600, '2024-12-01', 'Slit Edge', '500mm', '600mm', '2mm', '245MPa',  '19%', '165HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI123', '전기 제품 케이스', '1.6mm', '1500mm', 450, '2024-12-10', 'Mill Edge', '530mm', '630mm', '2.3mm', '235MPa',  '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI456', '파이프 라인', '1.4mm', '1450mm', 480, '2024-12-20', 'Slit Edge', '550mm', '650mm', '2.1mm', '265MPa',  '22%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI789', '차량용 패널', '2.1mm', '1550mm', 530, '2025-01-05', 'Mill Edge', '560mm', '660mm', '2.4mm', '255MPa',  '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CR', 'JS_SI321', '건축용 외장재', '2.3mm', '1600mm', 480, '2025-01-15', 'Slit Edge', '570mm', '670mm', '2.5mm', '250MPa',  '24%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI654', '선박 부품', '2.8mm', '1700mm', 520, '2025-01-30', 'Mill Edge', '590mm', '690mm', '2.8mm', '270MPa',  '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI987', '자동차 프레임', '2.5mm', '1650mm', 600, '2025-02-10', 'Slit Edge', '600mm', '700mm', '3mm', '260MPa',  '20%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI321', '가전제품 프레임', '1.9mm', '1300mm', 530, '2025-02-20', 'Mill Edge', '510mm', '610mm', '2.2mm', '240MPa',  '22%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI654', '농업 기계 부품', '2.2mm', '1350mm', 580, '2025-03-01', 'Slit Edge', '520mm', '620mm', '2.3mm', '255MPa',  '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI987', '기계 장비 하우징', '2.7mm', '1400mm', 550, '2025-03-15', 'Mill Edge', '540mm', '640mm', '2.6mm', '250MPa',  '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI321', '차량용 브래킷', '1.7mm', '1250mm', 600, '2025-03-25', 'Slit Edge', '530mm', '630mm', '2.1mm', '245MPa',  '20%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI654', '철도 부품', '2.6mm', '1450mm', 500, '2025-04-01', 'Mill Edge', '560mm', '660mm', '2.4mm', '260MPa',  '25%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI987', '전자기기 케이스', '1.8mm', '1500mm', 520, '2025-04-15', 'Slit Edge', '580mm', '680mm', '2.5mm', '240MPa',  '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CR', 'JS_SI321', '가구용 판재', '2.0mm', '1550mm', 470, '2025-04-25', 'Mill Edge', '590mm', '690mm', '2.6mm', '250MPa',  '22%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI654', '기계 구조물', '2.4mm', '1600mm', 490, '2025-05-01', 'Slit Edge', '600mm', '700mm', '2.7mm', '270MPa',  '24%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI987', '자동차 차체 부품', '2.9mm', '1650mm', 510, '2025-05-15', 'Mill Edge', '610mm', '710mm', '2.8mm', '265MPa',  '21%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI321', '파이프 라인 커버', '1.5mm', '1200mm', 550, '2025-05-25', 'Slit Edge', '620mm', '720mm', '2mm', '230MPa',  '19%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI654', '산업용 플레이트', '2.7mm', '1700mm', 580, '2025-06-01', 'Mill Edge', '630mm', '730mm', '2.9mm', '250MPa',  '23%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI987', '기계 부품', '3.0mm', '1800mm', 600, '2025-06-15', 'Slit Edge', '640mm', '740mm', '3.1mm', '270MPa',  '22%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI321', '전기 케이블 덮개', '2.1mm', '1300mm', 470, '2025-06-25', 'Mill Edge', '650mm', '750mm', '2.2mm', '240MPa',  '20%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI654', '기계 부품 하우징', '1.9mm', '1350mm', 500, '2025-07-01', 'Slit Edge', '660mm', '760mm', '2.4mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI987', '파이프 라인 보호대', '2.8mm', '1500mm', 520, '2025-07-15', 'Mill Edge', '670mm', '770mm', '2.6mm', '250MPa',  '19%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CR', 'JS_SI987', '엔진 부품', '2.2mm', '1550mm', 520, '2025-07-25', 'Slit Edge', '680mm', '780mm', '2.5mm', '255MPa', '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI321', '냉각기 부품', '1.8mm', '1400mm', 480, '2025-08-05', 'Mill Edge', '700mm', '800mm', '2.2mm', '245MPa', '20%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI654', '기계 내부 프레임', '2.9mm', '1700mm', 600, '2025-08-20', 'Slit Edge', '720mm', '820mm', '3mm', '265MPa', '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CR', 'JS_SI456', '자동차 섀시', '1.9mm', '1450mm', 550, '2025-09-01', 'Mill Edge', '730mm', '830mm', '2.4mm', '230MPa', '22%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI789', '전자 기기 패널', '2.4mm', '1600mm', 490, '2025-09-10', 'Slit Edge', '750mm', '850mm', '2.6mm', '250MPa', '23%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI123', '중장비 부품', '3.1mm', '1750mm', 510, '2025-09-25', 'Mill Edge', '770mm', '870mm', '3.2mm', '275MPa', '24%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI987', '해양 구조물', '2.7mm', '1500mm', 530, '2025-10-05', 'Slit Edge', '790mm', '890mm', '2.8mm', '240MPa', '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI654', '가전제품 하우징', '2.1mm', '1350mm', 600, '2025-10-15', 'Mill Edge', '810mm', '910mm', '2.3mm', '260MPa', '19%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI321', '파이프 서포트', '2.5mm', '1600mm', 470, '2025-10-30', 'Slit Edge', '820mm', '920mm', '2.7mm', '270MPa', '20%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI456', '차량용 브라켓', '1.6mm', '1300mm', 580, '2025-11-05', 'Mill Edge', '840mm', '940mm', '2.1mm', '250MPa', '22%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI123', '건축용 내장재', '2.3mm', '1650mm', 490, '2025-11-15', 'Slit Edge', '850mm', '950mm', '2.5mm', '255MPa', '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI789', '항공기 부품', '2.9mm', '1800mm', 500, '2025-12-01', 'Mill Edge', '870mm', '970mm', '2.9mm', '265MPa', '21%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI654', '전자기기 커버', '2.0mm', '1400mm', 570, '2025-12-10', 'Slit Edge', '890mm', '990mm', '2.6mm', '245MPa', '19%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI987', '자동차 패널', '2.6mm', '1550mm', 520, '2025-12-20', 'Mill Edge', '900mm', '1000mm', '2.8mm', '255MPa', '24%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI321', '산업 기계 부품', '3.2mm', '1700mm', 590, '2026-01-05', 'Slit Edge', '920mm', '1020mm', '3.1mm', '275MPa', '20%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI456', '전기 부품', '2.1mm', '1450mm', 530, '2026-01-15', 'Mill Edge', '940mm', '1040mm', '2.7mm', '240MPa', '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI123', '차량용 프레임', '1.7mm', '1200mm', 600, '2026-01-25', 'Slit Edge', '960mm', '1060mm', '2.2mm', '230MPa', '22%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI789', '중장비 커버', '2.8mm', '1750mm', 450, '2026-02-05', 'Mill Edge', '980mm', '1080mm', '2.9mm', '265MPa', '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- HOTROLLED_LINE_ITEMS
INSERT INTO hotrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, hardness, flatness, order_edge, quantity, yielding_point, tensile_strength, elongation_ratio, camber, annual_cost, is_activated, created_date, modified_date)
VALUES
    (2, 'HR', 'JS_SI123', '압력용기', '2mm', '1500mm', '270HV', '15', 'Mill Edge', 300, '250MPa', '400MPa', '20%', '0.3mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '가스탱크', '2.5mm', '1600mm', '300HV', '20', 'Slit Edge', 400, '270MPa', '420MPa', '18%', '0.4mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI789', '건축자재', '3mm', '1700mm', '350HV', '10', 'Mill Edge', 500, '320MPa', '450MPa', '22%', '0.2mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI123', '차체부품', '1.8mm', '1400mm', '280HV', '18', 'Slit Edge', 200, '260MPa', '410MPa', '19%', '0.3mm', '$8,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '산업용 드럼', '2.2mm', '1550mm', '295HV', '17', 'Mill Edge', 350, '275MPa', '430MPa', '21%', '0.5mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI789', '기계부품', '3.2mm', '1800mm', '310HV', '12', 'Slit Edge', 450, '330MPa', '460MPa', '23%', '0.4mm', '$16,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI123', '구조물', '2.4mm', '1500mm', '275HV', '14', 'Mill Edge', 280, '260MPa', '405MPa', '20%', '0.3mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI456', '자동차 프레임', '2.8mm', '1650mm', '310HV', '16', 'Slit Edge', 320, '280MPa', '435MPa', '19%', '0.4mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI789', '선박용', '3.5mm', '1900mm', '340HV', '11', 'Mill Edge', 400, '335MPa', '470MPa', '24%', '0.5mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HR', 'JS_SI321', '압력용기', '2.1mm', '1550mm', '275HV', '16', 'Slit Edge', 310, '260MPa', '410MPa', '19%', '0.3mm', '$10,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI654', '가스탱크', '2.7mm', '1650mm', '305HV', '15', 'Mill Edge', 420, '275MPa', '425MPa', '20%', '0.4mm', '$12,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI987', '건축자재', '3.1mm', '1750mm', '355HV', '14', 'Slit Edge', 510, '330MPa', '455MPa', '21%', '0.2mm', '$15,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HR', 'JS_SI123', '기계부품', '1.9mm', '1450mm', '280HV', '18', 'Mill Edge', 250, '265MPa', '415MPa', '22%', '0.3mm', '$8,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '산업용 드럼', '2.3mm', '1600mm', '300HV', '19', 'Slit Edge', 360, '280MPa', '435MPa', '21%', '0.5mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI789', '차체부품', '3.3mm', '1850mm', '315HV', '13', 'Mill Edge', 460, '335MPa', '465MPa', '23%', '0.4mm', '$16,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HR', 'JS_SI321', '파이프라인', '2.2mm', '1500mm', '285HV', '17', 'Slit Edge', 320, '270MPa', '420MPa', '19%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI654', '교량 부품', '2.6mm', '1700mm', '295HV', '15', 'Mill Edge', 400, '285MPa', '440MPa', '18%', '0.4mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI987', '기계 구조물', '3.4mm', '1900mm', '350HV', '11', 'Slit Edge', 450, '340MPa', '475MPa', '20%', '0.5mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI123', '차량용 패널', '2.1mm', '1550mm', '270HV', '16', 'Mill Edge', 290, '260MPa', '415MPa', '19%', '0.3mm', '$9,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '건축 자재', '2.4mm', '1600mm', '295HV', '18', 'Slit Edge', 350, '270MPa', '430MPa', '21%', '0.4mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI789', '산업 기계 부품', '3.0mm', '1700mm', '340HV', '14', 'Mill Edge', 480, '320MPa', '460MPa', '22%', '0.2mm', '$15,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI321', '교량 부재', '2.8mm', '1750mm', '315HV', '17', 'Slit Edge', 400, '290MPa', '450MPa', '18%', '0.3mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI654', '압력 용기', '2.5mm', '1600mm', '300HV', '19', 'Mill Edge', 370, '275MPa', '430MPa', '20%', '0.5mm', '$12,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI987', '선박용 패널', '3.3mm', '1800mm', '350HV', '12', 'Slit Edge', 450, '340MPa', '470MPa', '24%', '0.4mm', '$16,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI123', '구조물 부품', '1.7mm', '1400mm', '275HV', '15', 'Mill Edge', 230, '260MPa', '410MPa', '21%', '0.3mm', '$8,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '기계 구조물', '2.9mm', '1650mm', '320HV', '16', 'Slit Edge', 380, '295MPa', '450MPa', '22%', '0.5mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI789', '파이프라인 부품', '3.6mm', '1900mm', '355HV', '11', 'Mill Edge', 420, '345MPa', '480MPa', '20%', '0.2mm', '$18,300', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI321', '가전제품 부품', '2.0mm', '1500mm', '275HV', '13', 'Slit Edge', 260, '265MPa', '405MPa', '20%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI654', '차량 프레임', '2.9mm', '1750mm', '310HV', '17', 'Mill Edge', 350, '290MPa', '440MPa', '21%', '0.4mm', '$13,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI987', '중장비 부품', '3.7mm', '2000mm', '345HV', '10', 'Slit Edge', 410, '330MPa', '470MPa', '24%', '0.5mm', '$18,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI123', '선박 구조물', '2.3mm', '1600mm', '280HV', '14', 'Mill Edge', 300, '270MPa', '415MPa', '22%', '0.3mm', '$9,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI456', '기계용 패널', '2.6mm', '1650mm', '315HV', '16', 'Slit Edge', 330, '295MPa', '445MPa', '23%', '0.5mm', '$13,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI789', '구조물 프레임', '3.5mm', '1850mm', '350HV', '12', 'Mill Edge', 430, '340MPa', '460MPa', '20%', '0.4mm', '$17,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI321', '산업용 드럼', '2.4mm', '1500mm', '285HV', '15', 'Slit Edge', 310, '275MPa', '410MPa', '19%', '0.2mm', '$9,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI654', '차체 부품', '2.2mm', '1550mm', '300HV', '19', 'Mill Edge', 340, '280MPa', '435MPa', '18%', '0.5mm', '$12,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI987', '파이프라인 구조물', '3.8mm', '1950mm', '355HV', '11', 'Slit Edge', 470, '350MPa', '480MPa', '21%', '0.3mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- WIREROD_LINE_ITEMS
INSERT INTO wirerod_line_items (inquiry_id, kind, inq_name, order_category, diameter, quantity, expected_deadline, initial_quantity, customer_processing, final_use, transportation_destination, annual_cost, legal_regulatory_review, legal_regulatory_review_detail, final_customer, is_activated, created_date, modified_date)
VALUES
    (3, 'SWRH', 'JS_SI123', '와이어로프', '8.0mm', 500, '2024-09-15', 100, '냉간 인발', '엘레베이터 와이어로프', '부산', '$15,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI456', '볼트', '10.0mm', 700, '2024-09-01', 200, '표면 처리', '볼트', '서울', '$18,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRS', 'JS_SI789', '스프링', '9.5mm', 600, '2024-10-01', 150, '열간 성형', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRH', 'JS_SI123', '케이블', '6.0mm', 800, '2024-11-01', 200, '표면 처리', '전기 케이블', '대구', '$13,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRM', 'JS_SI456', '리벳', '7.5mm', 1000, '2024-08-15', 300, '냉간 단조', '건축용 리벳', '광주', '$16,500', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRS', 'JS_SI789', '자동차부품', '11.0mm', 900, '2024-12-01', 250, '냉간 인발', '자동차 서스펜션', '울산', '$22,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRH', 'JS_SI123', '전선', '5.5mm', 750, '2024-07-20', 180, '열간 연신', '고압 전선', '대전', '$14,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRM', 'JS_SI456', '나사', '8.5mm', 850, '2024-08-25', 220, '표면 처리', '가구 나사', '청주', '$17,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRS', 'JS_SI789', '기계부품', '12.0mm', 650, '2024-09-10', 240, '냉간 인발', '기계 장치 부품', '수원', '$19,500', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRH', 'JS_SI321', '지지대', '7.0mm', 550, '2024-10-15', 130, '냉간 인발', '건축 지지대', '서울', '$14,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI654', '너트', '8.0mm', 600, '2024-11-20', 160, '열간 성형', '기계 너트', '부산', '$16,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRS', 'JS_SI987', '클립', '7.5mm', 500, '2024-12-10', 200, '표면 처리', '전선 클립', '대구', '$15,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRH', 'JS_SI123', '볼트', '9.0mm', 700, '2024-12-25', 250, '냉간 인발', '건축용 볼트', '인천', '$17,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI456', '스프링', '10.0mm', 800, '2025-01-15', 300, '열간 성형', '자동차 스프링', '광주', '$19,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRS', 'JS_SI789', '케이블', '6.5mm', 600, '2025-02-01', 150, '표면 처리', '전기 케이블', '울산', '$13,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRH', 'JS_SI321', '와이어', '5.5mm', 650, '2025-02-15', 180, '냉간 인발', '항공 와이어', '대전', '$14,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI654', '리벳', '7.0mm', 750, '2025-03-05', 210, '열간 성형', '건축용 리벳', '수원', '$16,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRS', 'JS_SI987', '서스펜션', '11.5mm', 700, '2025-03-25', 240, '냉간 인발', '자동차 서스펜션', '청주', '$21,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRH', 'JS_SI123', '전선', '6.0mm', 800, '2025-04-15', 220, '열간 연신', '고압 전선', '광주', '$14,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRM', 'JS_SI456', '나사', '7.0mm', 850, '2025-05-01', 230, '표면 처리', '건축용 나사', '서울', '$16,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRS', 'JS_SI789', '기계부품', '9.5mm', 950, '2025-05-20', 250, '냉간 인발', '기계 장치 부품', '부산', '$18,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRH', 'JS_SI321', '클립', '7.5mm', 1000, '2025-06-01', 260, '표면 처리', '전선 클립', '인천', '$15,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRM', 'JS_SI654', '볼트', '8.0mm', 900, '2025-06-15', 270, '냉간 인발', '건축용 볼트', '대구', '$17,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRS', 'JS_SI987', '와이어로프', '6.5mm', 700, '2025-07-01', 180, '열간 성형', '엘레베이터 와이어로프', '광주', '$14,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRH', 'JS_SI123', '너트', '8.5mm', 750, '2025-07-15', 200, '표면 처리', '기계 너트', '대전', '$16,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRM', 'JS_SI456', '스프링', '11.0mm', 600, '2025-08-01', 190, '냉간 인발', '자동차 스프링', '울산', '$19,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRS', 'JS_SI789', '케이블', '5.5mm', 850, '2025-08-20', 210, '표면 처리', '전기 케이블', '수원', '$13,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRH', 'JS_SI321', '리벳', '7.5mm', 700, '2025-09-10', 220, '열간 성형', '건축용 리벳', '청주', '$16,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRM', 'JS_SI654', '전선', '6.0mm', 750, '2025-09-25', 240, '냉간 인발', '고압 전선', '서울', '$14,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRS', 'JS_SI987', '볼트', '8.0mm', 800, '2025-10-05', 250, '열간 성형', '건축용 볼트', '부산', '$17,500', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRH', 'JS_SI123', '스프링', '10.0mm', 600, '2025-10-20', 200, '표면 처리', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRM', 'JS_SI456', '와이어로프', '9.5mm', 500, '2025-11-01', 150, '냉간 인발', '엘레베이터 와이어로프', '광주', '$15,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- THICKPLATE_LINE_ITEMS
INSERT INTO thickplate_line_items (inquiry_id, order_purpose, order_info, ladle_ingredient, product_ingredient, seal, grain_size_analysis, show, extra_show, aging_show, curve, additional_requests, hardness, drop_weight_test, ultrasonic_transducer, is_activated, created_date, modified_date)
VALUES
    (5, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 바람', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '강도에 특히 신경을 써주세요', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '건축용 강판', 'TP003', '칼슘', 'Manganese', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '차량용 강판', 'TP004', '티타늄', 'Aluminum', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '압력 용기용', 'TP005', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '기계 부품', 'TP006', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성을 보장해주세요', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 바람', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '강도에 특히 신경을 써주세요', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '산업기계용', 'TP003', '칼슘', 'Manganese', '400 MPa ~ 600 MPa', true, '32 J @ -15°C', '48 J @ -20°C', '34 J @ -25°C', '520 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '건축용', 'TP004', '티타늄', 'Aluminum', '420 MPa ~ 580 MPa', true, '30 J @ -20°C', '46 J @ -25°C', '33 J @ -30°C', '530 MPa', '강도와 내구성 모두 고려해주세요', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '기계 부품', 'TP005', '크롬', 'Nickel', '440 MPa ~ 620 MPa', false, '28 J @ -10°C', '44 J @ -20°C', '32 J @ -25°C', '540 MPa', '내구성 및 강도 요구', '240HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '압력 용기용', 'TP006', '몰리브덴', 'Zinc', '380 MPa ~ 550 MPa', true, '31 J @ -15°C', '42 J @ -25°C', '34 J @ -30°C', '510 MPa', '안전 기준 충족 요구', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '기계 부품', 'TP007', '마그네시아', 'Carbon', '430 MPa ~ 600 MPa', false, '29 J @ -20°C', '41 J @ -30°C', '33 J @ -35°C', '525 MPa', '내구성 강화', '210HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP008', '알루미나', 'Silicon', '360 MPa ~ 550 MPa', true, '36 J @ -10°C', '47 J @ -20°C', '31 J @ -25°C', '540 MPa', '강도와 내구성 모두 고려', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '교량용', 'TP009', '칼슘', 'Manganese', '410 MPa ~ 600 MPa', true, '34 J @ -15°C', '46 J @ -25°C', '35 J @ -30°C', '515 MPa', '강도 및 내구성 모두 고려', '215HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '건축용 강판', 'TP010', '마그네시아', 'Carbon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '차량용 강판', 'TP011', '칼슘', 'Manganese', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '건축용 강판', 'TP012', '알루미나', 'Silicon', '340 MPa ~ 550 MPa', true, '32 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '520 MPa', '강도와 내구성 모두 고려', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '기계 부품', 'TP013', '티타늄', 'Aluminum', '350 MPa ~ 560 MPa', false, '30 J @ -20°C', '50 J @ -25°C', '35 J @ -30°C', '510 MPa', '내구성 강조', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '압력 용기용', 'TP014', '크롬', 'Nickel', '370 MPa ~ 580 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '525 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '산업기계용', 'TP015', '몰리브덴', 'Zinc', '360 MPa ~ 550 MPa', true, '31 J @ -15°C', '44 J @ -25°C', '34 J @ -30°C', '500 MPa', '내구성 및 강도 요구', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '건축용 강판', 'TP016', '마그네시아', 'Carbon', '340 MPa ~ 530 MPa', false, '28 J @ -10°C', '46 J @ -20°C', '32 J @ -25°C', '515 MPa', '강도와 내구성 모두 고려', '215HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '차량용 강판', 'TP017', '칼슘', 'Manganese', '330 MPa ~ 550 MPa', true, '29 J @ -15°C', '47 J @ -25°C', '30 J @ -30°C', '525 MPa', '경량화 및 강도 강화', '225HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '기계 부품', 'TP018', '알루미나', 'Silicon', '360 MPa ~ 540 MPa', true, '32 J @ -20°C', '48 J @ -30°C', '34 J @ -35°C', '530 MPa', '내구성 및 강도 요구', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '압력 용기용', 'TP019', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '기계 부품', 'TP020', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성을 보장해주세요', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '산업기계용', 'TP021', '마그네시아', 'Carbon', '420 MPa ~ 620 MPa', true, '31 J @ -20°C', '43 J @ -25°C', '35 J @ -30°C', '525 MPa', '강도 및 내구성 모두 고려', '225HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '건축용', 'TP022', '알루미나', 'Silicon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- OFFERSHEET
INSERT INTO offersheet (inquiry_id, price_terms, payment_terms, shipment, validity, destination, remark)
VALUES
    (2, 'CIF 30', 'Telegraphic Transfer', '2023-09-01', '2023-12-31', '보람', '최종검토바람'),
    (4, 'FOB 45', 'Document Against Payment', '2023-10-01', '2024-01-31', '금강', '유효기간 내 제품 배송 확인'),
    (5, 'EXW 10', 'Document Against Acceptance', '2023-11-01', '2024-02-28', '세신', '최종승인 완료'),
    (6, 'CIF 60', 'Letter of Credit', '2023-12-01', '2024-03-31', '호수', '제품의 정확한 사양 확인 필요'),
    (11, 'FOB 30', 'Cash in Advance', '2024-01-01', '2024-06-30', '강산', '선급금 확인 후 출고');

-- RECEIPTS
INSERT INTO receipts (offer_sheet_id, product, specification, surface_finish, usage, thickness, diameter, width, quantity, price, unit_min_weight, unit_max_weight, edge)
VALUES
    (1, '자동차', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '500mm', '1500mm', '800', '950', '600', '700', 'Mill Edge'),
    (1, '자동차', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '500', '900', '500', '600', 'Trimmed Edge'),
    (1, '자동차', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '700mm', '1200mm', '1200', '950', '350', '400', 'Trimmed Edge'),
    (1, '자동차', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '400', '1100', '500', '600', 'Round Edge'),
    (1, '자동차', 'ASTM A228', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '900', '700', '400', '500', 'Round Edge'),
    (2, '열연', 'ASTM A36', 'Hot Rolled', 'Construction', '5mm', '150mm', '1500mm', '1000', '750', '500', '600', 'Mill Edge'),
    (2, '열연', 'API 5L', 'Seamless', 'Oil & Gas', '10mm', '300mm', '1000mm', '500', '1200', '800', '900', 'Trimmed Edge'),
    (2, '열연', 'JIS G3131', 'Hot Rolled', 'Automotive', '8mm', '500mm', '1200mm', '600', '900', '700', '800', 'Trimmed Edge'),
    (2, '열연', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '600mm', '1000mm', '1200', '950', '300', '350', 'Trimmed Edge'),
    (3, '냉연', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '400mm', '1500mm', '400', '800', '500', '600', 'Mill Edge'),
    (3, '냉연', 'ASTM A283', 'Hot Rolled', 'Structural', '9mm', '500mm', '1800mm', '600', '850', '600', '700', 'Trimmed Edge'),
    (3, '냉연', 'JIS G3141', 'Cold Rolled', 'Electronics', '1mm', '600mm', '1200mm', '800', '900', '350', '400', 'Trimmed Edge'),
    (3, '냉연', 'ISO 14001', 'Cold Drawn', 'Automotive', '3mm', '700mm', '1400mm', '500', '950', '400', '450', 'Round Edge'),
    (3, '냉연', 'ASTM A228', 'Cold Drawn', 'Wire', '2mm', '500mm', '1000mm', '1000', '650', '300', '350', 'Round Edge'),
    (3, '냉연', 'API 5L', 'Seamless', 'Oil & Gas', '14mm', '350mm', '2000mm', '200', '1450', '700', '800', 'Trimmed Edge'),
    (3, '냉연', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '300', '900', '500', '600', 'Mill Edge'),
    (3, '냉연', 'EN 10130', 'Cold Rolled', 'Appliances', '0.5mm', '500mm', '1500mm', '600', '950', '300', '350', 'Trimmed Edge'),
    (4, '후판', 'SS400', 'Hot Rolled', 'Structural', '8mm', '600mm', '1800mm', '800', '950', '600', '700', 'Mill Edge'),
    (4, '후판', 'ASTM A1011', 'Hot Rolled', 'Construction', '6mm', '800mm', '2000mm', '500', '850', '500', '650', 'Mill Edge'),
    (4, '후판', 'JIS G3141', 'Cold Rolled', 'Appliances', '1mm', '700mm', '1500mm', '700', '1000', '350', '400', 'Trimmed Edge'),
    (4, '후판', 'ISO 639', 'Cold Rolled', 'Automotive', '2mm', '600mm', '1400mm', '300', '1100', '400', '450', 'Trimmed Edge'),
    (4, '후판', 'ASTM A580', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '1000', '600', '500', '600', 'Round Edge'),
    (5, '선재', 'ASTM A572', 'Cold Rolled', 'Bridge Construction', '12mm', '500mm', '2000mm', '300', '1300', '700', '850', 'Mill Edge'),
    (5, '선재', 'JIS G3131', 'Hot Rolled', 'Structural', '10mm', '800mm', '1800mm', '500', '1000', '600', '750', 'Trimmed Edge'),
    (5, '선재', 'EN 10139', 'Cold Rolled', 'Machinery', '2mm', '700mm', '1500mm', '400', '950', '350', '400', 'Trimmed Edge'),
    (5, '선재', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '200', '1200', '500', '550', 'Round Edge'),
    (5, '선재', 'JIS G3507', 'Cold Drawn', 'Construction', '5mm', '400mm', '1000mm', '600', '700', '600', '650', 'Round Edge'),
    (5, '선재', 'API 5CT', 'Seamless', 'Oil & Gas', '15mm', '400mm', '1500mm', '200', '1450', '700', '800', 'Trimmed Edge');

-- QUALITY
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments, file_name, file_path)
VALUES
    (1, '수주 가능', '모든 규격 문제 없음', null, '엔진 컨트롤 유닛', '10g/m2', '5g/m2', '±0.1mm', 'Mill Edge', '빠른 회신 부탁합니다', '포항소', '품질 검토 이상 없음', null, null),
    (3, '수주 불가능', '직경 규격 초과', 'JS_SI123', '와이어로프', '12g/m2', '6g/m2', '±0.15mm', 'Slit Edge', '기한 내에 납부 바람', '광양소', '직경을 조정하여 재문의 바람', null, null),
    (3, '수주 가능', '모든 규격 문제 없음', 'JS_SI456', '엔진 부품', '8g/m2', '4g/m2', '±0.05mm', 'Mill Edge', '검토 후 회신 부탁합니다', '부산소', '품질 검토 완료', 'quality_report3.pdf', 'https://example.com/quality_report3.pdf'),
    (4, '수주 가능', '모든 규격 기준 충족', 'JS_SI789', '기계 부품', '15g/m2', '7g/m2', '±0.1mm', 'Slit Edge', '지체 없이 답변 바랍니다', '대구소', '품질 검토 완료', 'quality_report4.pdf', 'https://example.com/quality_report4.pdf'),
    (5, '수주 불가능', '두께 오차 초과', 'JS_SI101', '자동차 부품', '9g/m2', '5g/m2', '±0.2mm', 'Mill Edge', '기한 내에 수정 요청', '광주소', '두께 기준 초과로 재검토 필요', 'quality_report5.pdf', 'https://example.com/quality_report5.pdf'),
    (9, '수주 가능', '모든 기준 충족', 'JS_SI202', '전자 부품', '10g/m2', '4g/m2', '±0.1mm', 'Slit Edge', '신속한 처리 요청', '울산소', '품질 검토 이상 없음', 'quality_report9.pdf', 'https://example.com/quality_report9.pdf'),
    (11, '수주 불가능', '코팅량 부족', 'JS_SI303', '건축 자재', '5g/m2', '3g/m2', '±0.15mm', 'Mill Edge', '문제 수정 후 재문의 필요', '서울소', '코팅량 부족으로 수량 조정 필요', 'quality_report11.pdf', 'https://example.com/quality_report11.pdf'),
    (14, '수주 가능', '규격 완벽 적합', 'JS_SI404', '화학 제품', '12g/m2', '6g/m2', '±0.1mm', 'Slit Edge', '문서 검토 후 처리 부탁', '인천소', '품질 검토 완료', 'quality_report14.pdf', 'https://example.com/quality_report14.pdf');

-- REVIEW
INSERT INTO reviews (inquiry_id, contract, thickness_notify, review_text, attachment_file_name, attachment_file_path, final_review_text, ts_review_req, created_date, modified_date)
VALUES
    (1, 'CUSTOMER_RELATIONSHIP', '두께 오차가 없어야함', '귀사의 문의에 대해 품질 검토가 필요하며 9월30일까지 회신드릴 것을 약속합니다', 'attachment1.pdf','attachment1name.pdf', '품질 검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'MARKET_DEMAND', '두께 허용오차를 벗어나면 안됨', '검토 후 이상 없음', 'attachment2.pdf', 'attachment2name.pdf', '품질검토하지 않고 문제 없이 최종검토 완료합니다', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment3.pdf', 'attachment3name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'CUSTOMER_RELATIONSHIP', '두께가 정확해야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment6.pdf', 'attachment6name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment8.pdf', 'attachment8name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment10.pdf', 'attachment10name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment15.pdf', 'attachment15name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- CUSTOMER_NOTIFICATION
INSERT INTO customer_notification (is_read, created_date, user_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', '문의가 접수되었습니다'),
    (FALSE, '2024-08-02 11:15:00', 1, '2024-08-02 11:15:00', '1차 검토가 진행중입니다'),
    (FALSE, '2024-08-04 11:15:00', 1, '2024-08-02 11:15:00', '품질 검토가 진행중입니다'),
    (FALSE, '2024-08-05 11:15:00', 1, '2024-08-02 11:15:00', '문의가 최종 검토 완료되었습니다.'),
    (TRUE, '2024-08-06 14:30:00', 1, '2024-08-03 14:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-06 14:34:00', 1, '2024-08-03 14:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-01 10:00:00', 2, '2024-08-01 10:00:00', '문의가 접수되었습니다'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', '1차 검토가 진행중입니다'),
    (FALSE, '2024-08-04 11:15:00', 2, '2024-08-04 11:15:00', '품질 검토가 진행중입니다'),
    (FALSE, '2024-08-05 11:15:00', 2, '2024-08-05 11:15:00', '문의가 최종 검토 완료되었습니다.'),
    (TRUE, '2024-08-06 14:30:00', 2, '2024-08-06 14:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-07 10:00:00', 2, '2024-08-07 10:00:00', '질문이 답변되었습니다'),
    (TRUE, '2024-08-01 09:00:00', 3, '2024-08-01 09:00:00', '문의가 접수되었습니다'),
    (FALSE, '2024-08-02 10:15:00', 3, '2024-08-02 10:15:00', '1차 검토가 진행중입니다'),
    (FALSE, '2024-08-04 12:15:00', 3, '2024-08-04 12:15:00', '품질 검토가 진행중입니다'),
    (FALSE, '2024-08-05 13:15:00', 3, '2024-08-05 13:15:00', '문의가 최종 검토 완료되었습니다.'),
    (TRUE, '2024-08-06 15:30:00', 3, '2024-08-06 15:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-07 11:00:00', 3, '2024-08-07 11:00:00', '질문이 답변되었습니다'),
    (TRUE, '2024-08-01 08:00:00', 4, '2024-08-01 08:00:00', '문의가 접수되었습니다'),
    (FALSE, '2024-08-02 09:15:00', 4, '2024-08-02 09:15:00', '1차 검토가 진행중입니다'),
    (FALSE, '2024-08-04 13:15:00', 4, '2024-08-04 13:15:00', '품질 검토가 진행중입니다'),
    (FALSE, '2024-08-05 14:15:00', 4, '2024-08-05 14:15:00', '문의가 최종 검토 완료되었습니다.'),
    (TRUE, '2024-08-06 16:30:00', 4, '2024-08-06 16:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-07 12:00:00', 4, '2024-08-07 12:00:00', '질문이 답변되었습니다'),
    (TRUE, '2024-08-01 07:00:00', 5, '2024-08-01 07:00:00', '문의가 접수되었습니다'),
    (FALSE, '2024-08-02 08:15:00', 5, '2024-08-02 08:15:00', '1차 검토가 진행중입니다'),
    (FALSE, '2024-08-04 14:15:00', 5, '2024-08-04 14:15:00', '품질 검토가 진행중입니다'),
    (FALSE, '2024-08-05 15:15:00', 5, '2024-08-05 15:15:00', '문의가 최종 검토 완료되었습니다.'),
    (TRUE, '2024-08-06 17:30:00', 5, '2024-08-06 17:30:00', '질문이 등록되었습니다'),
    (TRUE, '2024-08-07 13:00:00', 5, '2024-08-07 13:00:00', '질문이 답변되었습니다');

-- MANAGER_NOTIFICATION
INSERT INTO manager_notification (is_read, created_date, user_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-02 11:15:00', 1, '2024-08-02 11:15:00', '답변해야할 질문이 있습니다'),
    (TRUE, '2024-08-03 14:30:00', 1, '2024-08-03 14:30:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-03 14:30:00', 1, '2024-08-03 14:30:00', '협업 요청을 받았습니다.'),
    (TRUE, '2024-08-03 14:30:00', 1, '2024-08-03 14:30:00', '협업 요청이 거절되었습니다.'),
    (TRUE, '2024-08-03 14:30:00', 1, '2024-08-03 14:30:00', '협업 요청이 수락되었습니다.'),
    (TRUE, '2024-08-01 10:00:00', 2, '2024-08-01 10:00:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', '답변해야할 질문이 있습니다'),
    (TRUE, '2024-08-03 14:30:00', 2, '2024-08-03 14:30:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-03 14:30:00', 2, '2024-08-03 14:30:00', '협업 요청을 받았습니다.'),
    (FALSE, '2024-08-04 09:00:00', 2, '2024-08-04 09:00:00', '협업 요청이 거절되었습니다.'),
    (TRUE, '2024-08-05 10:00:00', 2, '2024-08-05 10:00:00', '협업 요청이 수락되었습니다.'),
    (FALSE, '2024-08-06 11:15:00', 3, '2024-08-06 11:15:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-07 12:30:00', 3, '2024-08-07 12:30:00', '답변해야할 질문이 있습니다'),
    (TRUE, '2024-08-08 13:45:00', 3, '2024-08-08 13:45:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-09 14:00:00', 3, '2024-08-09 14:00:00', '협업 요청을 받았습니다.'),
    (TRUE, '2024-08-10 15:15:00', 3, '2024-08-10 15:15:00', '협업 요청이 거절되었습니다.'),
    (TRUE, '2024-08-11 16:30:00', 3, '2024-08-11 16:30:00', '협업 요청이 수락되었습니다.'),
    (TRUE, '2024-08-12 17:45:00', 4, '2024-08-12 17:45:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-13 09:00:00', 4, '2024-08-13 09:00:00', '답변해야할 질문이 있습니다'),
    (TRUE, '2024-08-14 10:15:00', 4, '2024-08-14 10:15:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-15 11:30:00', 4, '2024-08-15 11:30:00', '협업 요청을 받았습니다.'),
    (FALSE, '2024-08-16 12:45:00', 4, '2024-08-16 12:45:00', '협업 요청이 거절되었습니다.'),
    (TRUE, '2024-08-17 14:00:00', 4, '2024-08-17 14:00:00', '협업 요청이 수락되었습니다.'),
    (TRUE, '2024-08-18 15:15:00', 5, '2024-08-18 15:15:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-19 16:30:00', 5, '2024-08-19 16:30:00', '답변해야할 질문이 있습니다'),
    (TRUE, '2024-08-20 17:45:00', 5, '2024-08-20 17:45:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-21 18:00:00', 5, '2024-08-21 18:00:00', '협업 요청을 받았습니다.'),
    (FALSE, '2024-08-22 09:15:00', 5, '2024-08-22 09:15:00', '협업 요청이 거절되었습니다.'),
    (TRUE, '2024-08-23 10:30:00', 5, '2024-08-23 10:30:00', '협업 요청이 수락되었습니다.');

ALTER TABLE question ALTER COLUMN inquiry_id DROP NOT NULL;
ALTER TABLE question ADD COLUMN col_id BIGINT;
ALTER TABLE question ALTER COLUMN col_id DROP NOT NULL;
ALTER TABLE answer ALTER COLUMN inquiry_id DROP NOT NULL;

-- QUESTION
INSERT INTO question (created_date, inquiry_id, user_id, title, contents, file_name, file_path, type, status, is_activated)
VALUES
    ('2024-08-01 10:00:00', null, 1, '귀사의 고객 서비스 문의 소요 기간에 대한 자세한 정보 요청', '귀사의 서비스를 이용함에 있어, 문의 사항이 발생할 경우 평균적으로 처리되는 소요 기간이 궁금하여 메일을 드립니다. 문의에 대한 답변을 제공해주시는 데 걸리는 평균적인 시간을 알려주시면 감사하겠습니다.', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'ETC', 'COMPLETED', true),
    ('2024-08-02 11:15:00', null, 2, '귀사의 제품 문의 방법 및 절차에 대한 구체적인 가이드라인 요청', '제품에 대해 문의를 드리고자 하는데, 제품 관련 문의를 진행하는 방법이나 절차에 대해 안내해 주실 수 있을지 궁금합니다. 문의를 위해 참고할 수 있는 웹사이트 링크나 연락처가 있다면 알려주시면 감사하겠습니다.', 'voc_report2.pdf', 'https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp', 'ETC', 'READY', true),
    ('2024-08-03 14:30:00', 12, 2, '24일에 문의드린 내용에 대해 아직 답변을 받지 못하였습니다.', '며칠 전에 귀사에 선재 제품 관련하여 메일을 드렸으나, 아직 답변을 받지 못하여 다시 한번 문의드립니다. 바쁘신 와중에도 문의에 대해 답변을 주시면 정말 감사하겠습니다. 가능하시다면 답변 예상 시간을 알려주시면 더욱 감사하겠습니다.', 'voc_report3.pdf', 'https://pimg.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1070042_16367508634846809.jpeg', 'INQ', 'COMPLETED', true),
    ('2024-08-03 14:30:00', 14, 4, '귀사의 열연 제품에 대한 품질 관련 상세 가이드라인 요청', '귀사의 선재 제품에 대해 관심이 있어, 이에 대한 자세한 정보를 요청드리고자 메일을 드립니다. 특히, 선재 제품의 규격에 대해 상세한 자료나 카탈로그가 있다면 공유해주시면 감사하겠습니다.', 'voc_report4.pdf', 'https://image.msscdn.net/images/goods_img/20231006/3610548/3610548_17017424897248_500.jpg', 'INQ', 'READY', true),
    ('2024-08-03 14:30:00', 8, 3, '귀사의 후판 제품에 대한 가격 명세 및 최신 가격표 요청', '귀사의 후판 제품에 대해 관심이 있어, 해당 제품의 가격 명세를 요청드리고자 메일을 드립니다. 특정 후판 제품의 가격 정보와 더불어, 제공해주실 수 있는 최신 가격표나 관련 자료가 있다면 함께 전달해주시면 감사하겠습니다.', 'voc_report5.pdf', 'https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2024/01/19/291341705630335148.jpg', 'INQ', 'COMPLETED', true),
    ('2024-08-04 09:00:00', 1, 1, '냉연 제품 주문 후 예상 배송 기간 및 추적 방법에 대한 문의', '최근에 귀사에서 제품을 주문하였는데 현재 배송 상태가 궁금하여 문의드립니다. 제품이 언제쯤 도착할지 예상되는 날짜를 알려주시면 감사하겠습니다. 또한, 배송 관련 추가 정보나 추적 방법이 있다면 함께 안내해 주시면 좋겠습니다.', 'voc_report6.pdf', 'https://cdn.example.com/image1.jpg', 'INQ', 'READY', true),
    ('2024-08-05 10:00:00', null, 2, '회원 가입 과정에서 발생하는 지속적인 오류 문제 해결 요청', '귀사 웹사이트에서 회원 가입을 진행하던 중, 문제가 발생하여 가입을 완료할 수 없었습니다. 특히, 가입 양식을 제출할 때 오류 메시지가 표시되는 문제가 발생했습니다. 이 문제를 해결하기 위해 어떻게 해야 하는지 안내해 주시면 감사하겠습니다.', 'voc_report7.pdf', 'https://cdn.example.com/image2.jpg', 'SITE', 'COMPLETED', true),
    ('2024-08-06 11:00:00', 2, 2, '결제 과정에서 발생하는 지속적인 오류 문제 해결 요청', '귀사 웹사이트에서 결제를 진행하던 중, 오류가 발생하여 결제가 완료되지 않았습니다. 특히, 결제 정보 입력 후 결제 실패 메시지가 표시되었습니다. 이 문제를 해결하기 위한 방법을 안내해 주시면 감사하겠습니다.', 'voc_report8.pdf', 'https://cdn.example.com/image3.jpg', 'INQ', 'READY', true),
    ('2024-08-07 12:00:00', null, 4, '직원의 실수로 계정 삭제 및 복구 가능 여부 문의', '최근에 제 계정에 접근할 수 없는 문제가 발생하여 계정 복구를 요청드립니다. 계정에 로그인하려고 시도하였으나 계정이 잠긴 것 같습니다.', 'voc_report9.pdf', 'https://cdn.example.com/image4.jpg', 'SITE', 'COMPLETED', true),
    ('2024-08-08 13:00:00', null, 5, '최첨단 기술 지원 요청: "오류 503: 서비스 이용 불가" 문제', '프로그램 실행 중 "서비스 이용 불가"라는 메시지가 나타나며, 이후 소프트웨어가 강제 종료됩니다. 이로 인해 작업이 중단되고 있습니다. 최대한 빠른 해결 부탁드립니다.', 'voc_report10.pdf', 'https://cdn.example.com/image5.jpg', 'ETC', 'READY', true),
    ('2024-08-09 14:00:00', 5, 5, '선재 제품의 결함으로 인한 환불 요청', '최근에 귀사에서 제품을 구매하였으나, 제품에 결함이 있고 기대했던 성능과 상이하여 환불을 요청드리는 바입니다.', 'voc_report11.pdf', 'https://cdn.example.com/image6.jpg', 'INQ', 'COMPLETED', true),
    ('2024-08-10 15:00:00', null, 2, '제품 재고 현황 및 수량에 대한 정보 요청', '귀사에서 제공하는 제품의 현재 재고 상태를 확인하고자 메일을 드립니다. 특히, 제품의 현재 재고 수량과 재고 상황에 대한 정보를 제공해주시면 감사하겠습니다.', 'voc_report12.pdf', 'https://cdn.example.com/image7.jpg', 'SITE', 'READY', true),
    ('2024-08-11 16:00:00', null, 3, '서비스 품질 향상을 위한 개선 요청 및 피드백 제출', '제품 배송 날짜를 함께 공지하는 것에 대해 제안드립니다. 제 피드백이 귀사에 유익하게 사용되기를 바라며, 추가적인 정보나 논의가 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report13.pdf', 'https://cdn.example.com/image8.jpg', 'ETC', 'COMPLETED', true),
    ('2024-08-12 17:00:00', 8, 3, '후판 제품 배송 주소 변경 요청', '최근 기업이 판교로 이사를 하여, 변경된 주소로 배송이 이루어질 수 있도록 조치해 주시면 감사하겠습니다. 주소 변경이 가능한지, 그리고 추가로 필요한 절차가 있는지 안내해 주시면 좋겠습니다.', 'voc_report14.pdf', 'https://cdn.example.com/image9.jpg', 'INQ', 'READY', true),
    ('2024-08-13 18:00:00', null, 5,'현재 진행 중인 이벤트 관련 정보 및 참여 방법 문의', '귀사에서 현재 진행 중인 이벤트에 대해 문의드리고자 메일을 작성하였습니다. 이벤트에 참여하기 위한 조건이나 요구 사항이 있다면 안내해 주시면 감사하겠습니다. 이벤트에 참가하기 위한 등록 방법이나 절차에 대한 정보도 부탁드립니다.', 'voc_report15.pdf', 'https://cdn.example.com/image10.jpg', 'SITE', 'COMPLETED', true),
    ('2024-08-14 09:00:00', null, 1, '회원 탈퇴 요청 및 필요한 절차 안내 문의', '귀사에서 제공하는 서비스의 회원으로 가입되어 있으나, 개인적인 사정으로 인해 회원 탈퇴를 요청드리고자 메일을 작성하였습니다. 탈퇴를 진행하기 위해 필요한 절차나 추가 정보가 있다면 안내해 주시면 감사하겠습니다.', 'voc_report16.pdf', 'https://cdn.example.com/image11.jpg', 'ETC', 'READY', true),
    ('2024-08-15 10:00:00', 11, 1, '로그인 문제 해결을 위한 지원 요청', '현재 귀사 웹사이트에서 로그인 시 문제가 발생하여 도움을 요청드리고자 메일을 드립니다. 이 문제를 해결하기 위해 어떤 조치를 취해야 하는지 안내해 주시면 감사하겠습니다. 또한, 필요하신 추가 정보가 있다면 언제든지 연락 주시기 바랍니다.', 'voc_report17.pdf', 'https://cdn.example.com/image12.jpg', 'INQ', 'COMPLETED', true),
    ('2024-08-16 11:00:00', null, 3, '주문 내역 확인 및 현재 상태 안내 요청', '해당 주문의 현재 상태와 상세 내역을 확인할 수 있도록 안내해 주시면 감사하겠습니다. 또한, 주문 관련 추가 정보나 진행 상황에 대해서도 알려주시면 좋겠습니다.', 'voc_report18.pdf', 'https://cdn.example.com/image13.jpg', 'SITE', 'READY', true),
    ('2024-08-17 12:00:00', 12, 2, '구매한 제품 사용법 및 주요 기능, 안전 주의사항에 대한 설명서 요청', '최근에 귀사에서 구매한 제품의 사용법에 대해 문의드리고자 메일을 작성하였습니다. 제품 사용법, 주요 기능 및 특징, 안전 주의사항, 문제 해결 방법 등등 제품 사용을 원활히 하기 위해 필요한 설명서나 매뉴얼이 있다면 함께 제공해 주시면 감사하겠습니다.', 'voc_report19.pdf', 'https://cdn.example.com/image14.jpg', 'INQ', 'COMPLETED', true),
    ('2024-08-18 13:00:00', null, 5, '기타 문의 사항에 대한 정보 제공 및 필요한 절차 안내 요청', '이와 관련하여 필요한 정보나 문서가 있다면 제공해 주시면 감사하겠습니다. 또한, 해당 사항에 대한 답변을 받기 위해 특별히 필요한 절차가 있다면 안내해 주시면 좋겠습니다.', 'voc_report20.pdf', 'https://cdn.example.com/image15.jpg', 'ETC', 'READY', true),
    ('2024-08-19 14:00:00', null, 1, '최근 구매한 제품에 대한 확인서 요청', '최근에 귀사에서 제품을 구매하였으며, 해당 구매에 대한 확인서를 요청드리고자 메일을 드립니다. 구매 확인서는 다음과 같은 정보를 포함해야 합니다: 구매 일자, 주문 번호, 구매한 제품명 및 수량, 구매 금액 등 해당 정보를 포함한 확인서를 이메일로 보내주시면 감사하겠습니다.', 'voc_report21.pdf', 'https://cdn.example.com/image16.jpg', 'SITE', 'COMPLETED', true),
    ('2024-08-20 15:00:00', 13, 3, '프로그램 실행 중 "오류 503 서비스 이용 불가" 메시지 발생 문제 해결 요청', '프로그램 실행 중 "서비스 이용 불가"라는 메시지가 나타나며, 이후 소프트웨어가 강제 종료됩니다. 이로 인해 작업이 중단되고 있습니다.', 'voc_report22.pdf', 'https://cdn.example.com/image17.jpg', 'INQ', 'READY', true),
    ('2024-08-21 16:00:00', null, 3, '결제 과정에서 발생한 오류 문제 해결을 위한 도움 요청', '귀사 웹사이트에서 결제를 진행하던 중, 오류가 발생하여 결제가 완료되지 않았습니다. 결제 정보 입력 후 결제 실패 메시지가 표시되었습니다. 이 문제를 해결하기 위한 방법을 안내해 주시면 감사하겠습니다.', 'voc_report23.pdf', 'https://cdn.example.com/image18.jpg', 'ETC', 'COMPLETED', true),
    ('2024-08-22 17:00:00', null, 4, '서비스에 신규 기능 추가 요청 및 검토 부탁드립니다.', '이와 같은 기능이 추가되면 서비스의 사용 편의성과 효율성이 크게 향상될 것으로 기대됩니다. 기능 추가에 대한 검토를 부탁드리며, 추가적인 정보가 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report24.pdf', 'https://cdn.example.com/image19.jpg', 'SITE', 'READY', true),
    ('2024-08-23 18:00:00', 14, 4, '서비스 관련 질문 및 추가 정보 요청', '귀사의 서비스를 이용하면서 몇 가지 질문이 있어 메일을 드립니다. 이와 관련하여 필요한 추가 정보나 문서가 있다면 제공해 주시면 감사하겠습니다. 또한, 질문에 대한 답변이 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report25.pdf', 'https://cdn.example.com/image20.jpg', 'INQ', 'COMPLETED', true),
    ('2024-08-24 09:00:00', null, 1, '귀사 웹사이트 로그인 문제 해결을 위한 도움 요청', '현재 귀사 웹사이트에서 로그인 시 문제가 발생하여 도움을 요청드리고자 메일을 드립니다. 이 문제를 해결하기 위해 어떤 조치를 취해야 하는지 안내해 주시면 감사하겠습니다. 또한, 필요하신 추가 정보가 있다면 언제든지 연락 주시기 바랍니다.', 'voc_report26.pdf', 'https://cdn.example.com/image21.jpg', 'ETC', 'READY', true),
    ('2024-08-25 10:00:00', null, 2, '할인 코드와 관련된 정보 및 추가 설명 요청', '최근에 귀사에서 제공하는 제품을 구매하거나 이용하고자 하는데, 할인 코드와 관련된 몇 가지 질문이 있어 메일을 드립니다. 이와 관련하여 필요한 정보나 추가적인 설명이 있다면 제공해 주시면 감사하겠습니다. 답변을 기다리며, 추가적인 문의 사항이 있으면 언제든지 연락 주시기 바랍니다.', 'voc_report27.pdf', 'https://cdn.example.com/image22.jpg', 'SITE', 'COMPLETED', true),
    ('2024-08-26 11:00:00', 15, 5, '계정 권한과 관련된 문제 해결을 위한 지원 요청', '현재 귀사의 시스템에서 계정 권한과 관련된 문제가 발생하여 도움을 요청드리고자 메일을 작성하였습니다. 이 문제를 해결하기 위해 필요한 조치를 안내해 주시면 감사하겠습니다. 또한, 문제 해결을 위한 추가적인 정보가 필요하다면 언제든지 연락 주시기 바랍니다.', 'voc_report28.pdf', 'https://cdn.example.com/image23.jpg', 'INQ', 'READY', true),
    ('2024-08-27 12:00:00', null, 4, '회원 등급 변경 요청 및 필요한 절차 안내', '현재 귀사의 웹사이트에서 00으로 가입되어 있으며, 00으로 변경을 요청드리고자 메일을 드립니다. 회원 등급 변경을 위해 필요한 절차나 추가로 제공해야 할 정보가 있다면 안내해 주시면 감사하겠습니다. 또한, 등급 변경이 완료된 후 확인 이메일을 보내주시면 좋겠습니다.', 'voc_report29.pdf', 'https://cdn.example.com/image24.jpg', 'ETC', 'COMPLETED', true),
    ('2024-08-28 13:00:00', null, 5, '최근 구매 기록 조회를 위한 정보 요청', '귀사에서 제공하는 서비스를 이용하며, 최근의 구매 기록을 조회하고자 합니다. 구매 기록을 이메일로 제공해 주시면 감사하겠습니다. 또한, 구매 기록 확인을 위한 추가 절차가 있다면 안내해 주시기 바랍니다.', 'voc_report30.pdf', 'https://cdn.example.com/image25.jpg', 'SITE', 'READY', true);

-- ANSWER
INSERT INTO answer (created_date, inquiry_id, customer_id, question_id, manager_id, title, contents, file_name, file_path, is_activated)
VALUES
    (CURRENT_TIMESTAMP, null, 1, 1, 1, '문의해주셔서 감사합니다', '평균 문의 소요 기간은 3일이며 최대한 신속하고 정확한 답변을 드리도록 노력하겠습니다.', 'voc_answer1.pdf', 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B0B04C5B1E03660A', true),
    (CURRENT_TIMESTAMP, 12, 2, 3, 2, '문의해주셔서 감사합니다', '평균 문의 소요 기간은 3일이며 최대한 신속하고 정확한 답변을 드리도록 노력하겠습니다.', 'voc_answer1.pdf', 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B0B04C5B1E03660A', true),
    (CURRENT_TIMESTAMP, 8, 3, 5, 3, '문의해주셔서 감사합니다', '문제가 발생한 경우, 가능한 상세한 정보를 제공해주시면 더욱 신속하게 문제를 해결할 수 있습니다.', 'voc_answer3.pdf', 'https://example.com/image3.jpg', true),
    (CURRENT_TIMESTAMP, null, 2, 7, 4, '문의해주셔서 감사합니다', '제품 사용 중 불편사항이 있을 경우 언제든지 문의해주시기 바랍니다.', 'voc_answer5.pdf', 'https://example.com/image5.jpg', true),
    (CURRENT_TIMESTAMP, null, 4, 9, 5, '문의해주셔서 감사합니다', '자주 묻는 질문을 먼저 확인해보세요. 도움이 될 수 있습니다.', 'voc_answer7.pdf', 'https://example.com/image7.jpg', true),
    (CURRENT_TIMESTAMP, 5, 5, 11, 1, '문의해주셔서 감사합니다', '모든 문의는 신속하게 처리되도록 하겠습니다.', 'voc_answer9.pdf', 'https://example.com/image9.jpg', true),
    (CURRENT_TIMESTAMP, null, 3, 13, 2, '문의해주셔서 감사합니다', '문의하신 내용은 검토 후 답변을 드리겠습니다.', 'voc_answer11.pdf', 'https://example.com/image11.jpg', true),
    (CURRENT_TIMESTAMP, null, 5, 15, 3, '문의해주셔서 감사합니다', '문의 내용에 대한 정확한 답변을 제공하겠습니다.', 'voc_answer13.pdf', 'https://example.com/image13.jpg', true),
    (CURRENT_TIMESTAMP, 11, 1, 17, 4, '문의해주셔서 감사합니다', '제품 관련 문의는 이곳에 남겨주시면 됩니다.', 'voc_answer15.pdf', 'https://example.com/image15.jpg', true),
    (CURRENT_TIMESTAMP, 12, 2, 19, 5, '문의해주셔서 감사합니다', '저희가 최대한 신속히 답변을 드리겠습니다.', 'voc_answer17.pdf', 'https://example.com/image17.jpg', true),
    (CURRENT_TIMESTAMP, null, 1, 21, 1, '문의해주셔서 감사합니다', '문의사항은 최선을 다해 답변 드리겠습니다.', 'voc_answer19.pdf', 'https://example.com/image19.jpg', true),
    (CURRENT_TIMESTAMP, null, 3, 23, 2, '문의해주셔서 감사합니다', '문의해주셔서 감사합니다. 답변까지 시간이 걸릴 수 있습니다.', 'voc_answer21.pdf', 'https://example.com/image21.jpg', true),
    (CURRENT_TIMESTAMP, 14, 4, 25, 3, '문의해주셔서 감사합니다', '문의해주셔서 감사합니다. 최대한 빠르게 처리하겠습니다.', 'voc_answer23.pdf', 'https://example.com/image23.jpg', true),
    (CURRENT_TIMESTAMP, null, 2, 27, 4, '문의해주셔서 감사합니다', '문의하신 내용에 대해 최대한 빠른 답변을 드리겠습니다.', 'voc_answer25.pdf', 'https://example.com/image25.jpg', true),
    (CURRENT_TIMESTAMP, null, 4, 29, 5, '문의해주셔서 감사합니다', '자세한 정보를 제공해 주시면 빠르게 처리하겠습니다.', 'voc_answer27.pdf', 'https://example.com/image27.jpg', true);

-- Insert data into inquiry_log
INSERT INTO inquiry_log (inquiry_id, progress, created_date, modified_date)
VALUES
    -- Inquiry 1 (SUBMIT)
    (1, 'SUBMIT', '2024-09-01 09:15:22', '2024-09-01 09:15:22'),

    -- Inquiry 2 (SUBMIT)
    (2, 'SUBMIT', '2024-09-05 11:42:18', '2024-09-05 11:42:18'),

    -- Inquiry 3 (QUALITY_REVIEW_COMPLETED)
    (3, 'SUBMIT', '2024-09-10 13:27:55', '2024-09-10 13:27:55'),
    (3, 'RECEIPT', '2024-09-12 10:18:33', '2024-09-12 10:18:33'),
    (3, 'FIRST_REVIEW_COMPLETED', '2024-09-15 14:55:27', '2024-09-15 14:55:27'),
    (3, 'QUALITY_REVIEW_REQUEST', '2024-09-17 11:42:19', '2024-09-17 11:42:19'),
    (3, 'QUALITY_REVIEW_RESPONSE', '2024-09-19 15:29:44', '2024-09-19 15:29:44'),
    (3, 'QUALITY_REVIEW_COMPLETED', '2024-09-20 16:38:41', '2024-09-20 16:38:41'),

    -- Inquiry 4 (QUALITY_REVIEW_COMPLETED)
    (4, 'SUBMIT', '2024-09-15 10:05:33', '2024-09-15 10:05:33'),
    (4, 'RECEIPT', '2024-09-17 13:22:48', '2024-09-17 13:22:48'),
    (4, 'FIRST_REVIEW_COMPLETED', '2024-09-20 09:47:15', '2024-09-20 09:47:15'),
    (4, 'QUALITY_REVIEW_REQUEST', '2024-09-22 14:33:29', '2024-09-22 14:33:29'),
    (4, 'QUALITY_REVIEW_RESPONSE', '2024-09-24 11:58:52', '2024-09-24 11:58:52'),
    (4, 'QUALITY_REVIEW_COMPLETED', '2024-09-25 15:19:27', '2024-09-25 15:19:27'),

    -- Inquiry 5 (QUALITY_REVIEW_REQUEST)
    (5, 'SUBMIT', '2024-09-20 14:53:09', '2024-09-20 14:53:09'),
    (5, 'RECEIPT', '2024-09-22 10:27:35', '2024-09-22 10:27:35'),
    (5, 'FIRST_REVIEW_COMPLETED', '2024-09-24 15:48:22', '2024-09-24 15:48:22'),
    (5, 'QUALITY_REVIEW_REQUEST', '2024-09-25 09:34:58', '2024-09-25 09:34:58'),

    -- Inquiry 6 (FINAL_REVIEW_COMPLETED)
    (6, 'SUBMIT', '2024-09-25 08:47:12', '2024-09-25 08:47:12'),
    (6, 'RECEIPT', '2024-09-27 13:15:38', '2024-09-27 13:15:38'),
    (6, 'FIRST_REVIEW_COMPLETED', '2024-09-29 10:42:55', '2024-09-29 10:42:55'),
    (6, 'QUALITY_REVIEW_REQUEST', '2024-10-01 15:27:19', '2024-10-01 15:27:19'),
    (6, 'QUALITY_REVIEW_RESPONSE', '2024-10-03 11:53:44', '2024-10-03 11:53:44'),
    (6, 'QUALITY_REVIEW_COMPLETED', '2024-10-04 14:38:27', '2024-10-04 14:38:27'),
    (6, 'FINAL_REVIEW_COMPLETED', '2024-10-05 11:23:45', '2024-10-05 11:23:45'),

    -- Inquiry 7 (RECEIPT)
    (7, 'SUBMIT', '2024-09-30 15:39:28', '2024-09-30 15:39:28'),
    (7, 'RECEIPT', '2024-10-01 10:56:32', '2024-10-01 10:56:32'),

    -- Inquiry 8 (QUALITY_REVIEW_REQUEST)
    (8, 'SUBMIT', '2024-10-01 12:18:44', '2024-10-01 12:18:44'),
    (8, 'RECEIPT', '2024-10-02 09:45:17', '2024-10-02 09:45:17'),
    (8, 'FIRST_REVIEW_COMPLETED', '2024-10-04 11:32:55', '2024-10-04 11:32:55'),
    (8, 'QUALITY_REVIEW_REQUEST', '2024-10-04 12:22:55', '2024-10-04 12:22:55'),

    -- Inquiry 9 (FINAL_REVIEW_COMPLETED)
    (9, 'SUBMIT', '2024-09-01 14:22:37', '2024-09-01 14:22:37'),
    (9, 'RECEIPT', '2024-09-05 10:00:00', '2024-09-05 10:00:00'),
    (9, 'FIRST_REVIEW_COMPLETED', '2024-09-10 11:00:00', '2024-09-10 11:00:00'),
    (9, 'QUALITY_REVIEW_REQUEST', '2024-09-15 09:00:00', '2024-09-15 09:00:00'),
    (9, 'QUALITY_REVIEW_RESPONSE', '2024-09-20 14:00:00', '2024-09-20 14:00:00'),
    (9, 'QUALITY_REVIEW_COMPLETED', '2024-09-25 10:00:00', '2024-09-25 10:00:00'),
    (9, 'FINAL_REVIEW_COMPLETED', '2024-09-29 14:22:37', '2024-09-29 14:22:37'),

    -- Inquiry 10 (FIRST_REVIEW_COMPLETED)
    (10, 'SUBMIT', '2024-09-29 14:22:37', '2024-09-29 14:22:37'),
    (10, 'RECEIPT', '2024-10-01 10:00:00', '2024-10-01 10:00:00'),
    (10, 'FIRST_REVIEW_COMPLETED', '2024-10-03 14:22:37', '2024-10-03 14:22:37'),

    -- Inquiry 11 (QUALITY_REVIEW_RESPONSE)
    (11, 'SUBMIT', '2024-09-20 14:22:37', '2024-09-20 14:22:37'),
    (11, 'RECEIPT', '2024-09-22 10:00:00', '2024-09-22 10:00:00'),
    (11, 'FIRST_REVIEW_COMPLETED', '2024-09-25 11:00:00', '2024-09-25 11:00:00'),
    (11, 'QUALITY_REVIEW_REQUEST', '2024-09-28 09:00:00', '2024-09-28 09:00:00'),
    (11, 'QUALITY_REVIEW_RESPONSE', '2024-10-01 14:22:37', '2024-10-01 14:22:37'),

    -- Inquiry 12 (RECEIPT)
    (12, 'SUBMIT', '2024-09-25 14:22:37', '2024-09-25 14:22:37'),
    (12, 'RECEIPT', '2024-09-28 14:22:37', '2024-09-28 14:22:37'),

    -- Inquiry 13 (FIRST_REVIEW_COMPLETED)
    (13, 'SUBMIT', '2024-09-15 14:22:37', '2024-09-15 14:22:37'),
    (13, 'RECEIPT', '2024-09-18 10:00:00', '2024-09-18 10:00:00'),
    (13, 'FIRST_REVIEW_COMPLETED', '2024-09-22 14:22:37', '2024-09-22 14:22:37'),

    -- Inquiry 14 (QUALITY_REVIEW_RESPONSE)
    (14, 'SUBMIT', '2024-09-20 14:22:37', '2024-09-20 14:22:37'),
    (14, 'RECEIPT', '2024-09-23 10:00:00', '2024-09-23 10:00:00'),
    (14, 'FIRST_REVIEW_COMPLETED', '2024-09-26 11:00:00', '2024-09-26 11:00:00'),
    (14, 'QUALITY_REVIEW_REQUEST', '2024-09-29 09:00:00', '2024-09-29 09:00:00'),
    (14, 'QUALITY_REVIEW_RESPONSE', '2024-10-02 14:22:37', '2024-10-02 14:22:37'),

    -- Inquiry 15 (RECEIPT)
    (15, 'SUBMIT', '2024-09-28 11:22:37', '2024-09-28 11:22:37'),
    (15, 'RECEIPT', '2024-09-28 14:22:37', '2024-09-28 14:22:37');
