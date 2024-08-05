--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.inquiry DROP CONSTRAINT fksig243d8pl34gctfx8ud0ev4m;
ALTER TABLE ONLY public.voc DROP CONSTRAINT fkqsyb2viqf4lf74wnedl97x3c8;
ALTER TABLE ONLY public.offersheet DROP CONSTRAINT fkmroigd11971x9o3xjrwcx44dw;
ALTER TABLE ONLY public.offersheet DROP CONSTRAINT fkfoqr471j00t5og8ubojimbnj7;
ALTER TABLE ONLY public.quality DROP CONSTRAINT fke3agm2m2i71c1igntgpr4pion;
ALTER TABLE ONLY public.reviews DROP CONSTRAINT fka2jkj7dm6685tjs429iu911t3;
ALTER TABLE ONLY public.car_line_items DROP CONSTRAINT fk7kspx2ebtqc510ouwym39vkrq;
ALTER TABLE ONLY public.voc DROP CONSTRAINT voc_pkey;
ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
ALTER TABLE ONLY public.quality DROP CONSTRAINT quality_pkey;
ALTER TABLE ONLY public.offersheet DROP CONSTRAINT offersheet_pkey;
ALTER TABLE ONLY public.offersheet DROP CONSTRAINT offersheet_inquiry_id_key;
ALTER TABLE ONLY public.offersheet DROP CONSTRAINT offersheet_customer_id_key;
ALTER TABLE ONLY public.managers DROP CONSTRAINT managers_pkey;
ALTER TABLE ONLY public.inquiry DROP CONSTRAINT inquiry_pkey;
ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
ALTER TABLE ONLY public.car_line_items DROP CONSTRAINT car_line_items_pkey;
ALTER TABLE public.voc ALTER COLUMN voc_id DROP DEFAULT;
ALTER TABLE public.reviews ALTER COLUMN review_id DROP DEFAULT;
ALTER TABLE public.quality ALTER COLUMN quality_id DROP DEFAULT;
ALTER TABLE public.offersheet ALTER COLUMN offer_sheet_id DROP DEFAULT;
ALTER TABLE public.managers ALTER COLUMN manager_id DROP DEFAULT;
ALTER TABLE public.inquiry ALTER COLUMN inquiry_id DROP DEFAULT;
ALTER TABLE public.customers ALTER COLUMN customer_id DROP DEFAULT;
ALTER TABLE public.car_line_items ALTER COLUMN line_item_id DROP DEFAULT;
DROP SEQUENCE public.voc_voc_id_seq;
DROP TABLE public.voc;
DROP SEQUENCE public.reviews_review_id_seq;
DROP TABLE public.reviews;
DROP SEQUENCE public.quality_quality_id_seq;
DROP TABLE public.quality;
DROP SEQUENCE public.offersheet_offer_sheet_id_seq;
DROP TABLE public.offersheet;
DROP SEQUENCE public.managers_manager_id_seq;
DROP TABLE public.managers;
DROP SEQUENCE public.inquiry_inquiry_id_seq;
DROP TABLE public.inquiry;
DROP SEQUENCE public.customers_customer_id_seq;
DROP TABLE public.customers;
DROP SEQUENCE public.car_line_items_line_item_id_seq;
DROP TABLE public.car_line_items;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: car_line_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.car_line_items (
    contract smallint,
    is_activated boolean,
    m_tolerance integer,
    p_tolerance integer,
    quantity integer,
    created_date timestamp(6) without time zone,
    desired_delivery_date timestamp(6) without time zone,
    inquiry_id bigint,
    line_item_id bigint NOT NULL,
    modified_date timestamp(6) without time zone,
    sop timestamp(6) without time zone,
    bc_amount character varying(255),
    coating_another_condition character varying(255),
    coating_condition character varying(255),
    coating_unit character varying(255),
    complete_vehicle character varying(255),
    customer_name character varying(255),
    delivery_destination character varying(255),
    direction character varying(255),
    expense_per_year character varying(255),
    fc_amount character varying(255),
    ix_plate character varying(255),
    kind character varying(255),
    lab character varying(255),
    orders character varying(255),
    part_name character varying(255),
    pjt_name character varying(255),
    post_treatment character varying(255),
    qs_requirement character varying(255),
    ra_another_unit character varying(255),
    ra_target character varying(255),
    ra_unit character varying(255),
    regulation character varying(255),
    sales_vehicle_name character varying(255),
    standard_org character varying(255),
    thickness character varying(255),
    width character varying(255),
    CONSTRAINT car_line_items_coating_another_condition_check CHECK (((coating_another_condition)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_coating_condition_check CHECK (((coating_condition)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_coating_unit_check CHECK (((coating_unit)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_contract_check CHECK (((contract >= 0) AND (contract <= 1))),
    CONSTRAINT car_line_items_direction_check CHECK (((direction)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_ix_plate_check CHECK (((ix_plate)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_kind_check CHECK (((kind)::text = ANY ((ARRAY['CAR'::character varying, 'STEEL'::character varying])::text[]))),
    CONSTRAINT car_line_items_lab_check CHECK (((lab)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_orders_check CHECK (((orders)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_post_treatment_check CHECK (((post_treatment)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_ra_another_unit_check CHECK (((ra_another_unit)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_ra_unit_check CHECK (((ra_unit)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_regulation_check CHECK (((regulation)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[]))),
    CONSTRAINT car_line_items_standard_org_check CHECK (((standard_org)::text = ANY ((ARRAY['TEST'::character varying, 'TEST_LAB'::character varying])::text[])))
);


ALTER TABLE public.car_line_items OWNER TO postgres;

--
-- Name: car_line_items_line_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.car_line_items_line_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.car_line_items_line_item_id_seq OWNER TO postgres;

--
-- Name: car_line_items_line_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.car_line_items_line_item_id_seq OWNED BY public.car_line_items.line_item_id;


--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    is_activated boolean,
    created_date timestamp(6) without time zone,
    customer_id bigint NOT NULL,
    modified_date timestamp(6) without time zone,
    customer_code character varying(255),
    customer_name character varying(255),
    email character varying(255),
    name character varying(255),
    password character varying(255),
    phone character varying(255)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_customer_id_seq OWNER TO postgres;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_customer_id_seq OWNED BY public.customers.customer_id;


--
-- Name: inquiry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inquiry (
    department smallint,
    is_activated boolean,
    customer_id bigint,
    inquiry_id bigint NOT NULL,
    additional_requests character varying(255),
    corporate character varying(255),
    corporation_code character varying(255),
    country character varying(255),
    customer_request_date character varying(255),
    elapsed_days character varying(255),
    files character varying(255),
    industry character varying(255),
    inquiry_type character varying(255),
    product_type character varying(255),
    progress character varying(255),
    quality_manager character varying(255),
    response_deadline character varying(255),
    sales_manager character varying(255),
    sales_person character varying(255),
    CONSTRAINT inquiry_country_check CHECK (((country)::text = ANY ((ARRAY['USA'::character varying, 'CANADA'::character varying, 'KOREA'::character varying, 'JAPAN'::character varying, 'CHINA'::character varying, 'GERMANY'::character varying, 'FRANCE'::character varying])::text[]))),
    CONSTRAINT inquiry_department_check CHECK (((department >= 0) AND (department <= 3))),
    CONSTRAINT inquiry_industry_check CHECK (((industry)::text = ANY ((ARRAY['AUTOMOBILE'::character varying, 'OTHERS'::character varying, 'CONSTRUCTION'::character varying, 'DISTRIBUTION'::character varying, 'ELECTRIC'::character varying, 'FURNITURE'::character varying, 'PLATING'::character varying, 'HIGH_CARBON'::character varying, 'KITCHEN'::character varying, 'LOW_CARBON'::character varying, 'MACHINERY'::character varying, 'PIPE'::character varying, 'REROLLING'::character varying, 'SHIPBUILDING'::character varying, 'TRANSPORTATION'::character varying, 'VESSEL'::character varying, 'BEAM'::character varying])::text[]))),
    CONSTRAINT inquiry_inquiry_type_check CHECK (((inquiry_type)::text = ANY ((ARRAY['QUALITY_INQUIRY'::character varying, 'QUOTE_INQUIRY'::character varying, 'COMMON_INQUIRY'::character varying])::text[]))),
    CONSTRAINT inquiry_product_type_check CHECK (((product_type)::text = ANY ((ARRAY['COLD_ROLLED_GENERAL'::character varying, 'COLD_ROLLED_HOME_APPLIANCES'::character varying, 'COLD_ROLLED_OTHERS'::character varying, 'ELECTRICAL_STEEL'::character varying, 'HOT_ROLLED_GENERAL'::character varying, 'HOT_ROLLED_ENERGY_PIPE'::character varying, 'HOT_ROLLED_CONSTRUCTION'::character varying, 'WIRE_ROD'::character varying, 'HEAVY_PLATE_GENERAL'::character varying, 'HEAVY_PLATE_ENERGY_PIPE'::character varying, 'HEAVY_PLATE_CONSTRUCTION'::character varying, 'HEAVY_PLATE_ONSHORE_PLANT'::character varying, 'HEAVY_PLATE_SHIPBUILDING_OFFSHORE_PLANT'::character varying, 'SURFACE_TREATED_GENERAL'::character varying, 'SURFACE_TREATED_HOME_APPLIANCES'::character varying, 'STAINLESS'::character varying, 'SLAB'::character varying, 'CAR'::character varying])::text[]))),
    CONSTRAINT inquiry_progress_check CHECK (((progress)::text = ANY ((ARRAY['INITIAL_REVIEW'::character varying, 'INITIAL_REVIEW_COMPLETED'::character varying, 'QUALITY_REQUESTED'::character varying, 'QUALITY_REVIEW_COMPLETED'::character varying, 'FINAL_REVIEW_COMPLETED'::character varying])::text[])))
);


ALTER TABLE public.inquiry OWNER TO postgres;

--
-- Name: inquiry_inquiry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inquiry_inquiry_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inquiry_inquiry_id_seq OWNER TO postgres;

--
-- Name: inquiry_inquiry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inquiry_inquiry_id_seq OWNED BY public.inquiry.inquiry_id;


--
-- Name: managers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.managers (
    is_activated boolean,
    created_date timestamp(6) without time zone,
    manager_id bigint NOT NULL,
    modified_date timestamp(6) without time zone,
    department character varying(255),
    email character varying(255),
    emp_no character varying(255),
    name character varying(255),
    password character varying(255),
    phone character varying(255),
    role character varying(255),
    CONSTRAINT managers_department_check CHECK (((department)::text = ANY ((ARRAY['HR'::character varying, 'IT'::character varying, 'SALES'::character varying, 'FINANCE'::character varying])::text[]))),
    CONSTRAINT managers_role_check CHECK (((role)::text = ANY ((ARRAY['SALES'::character varying, 'QUALITY'::character varying])::text[])))
);


ALTER TABLE public.managers OWNER TO postgres;

--
-- Name: managers_manager_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.managers_manager_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.managers_manager_id_seq OWNER TO postgres;

--
-- Name: managers_manager_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.managers_manager_id_seq OWNED BY public.managers.manager_id;


--
-- Name: offersheet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.offersheet (
    shipment date,
    validity date,
    customer_id bigint,
    inquiry_id bigint,
    offer_sheet_id bigint NOT NULL,
    destination character varying(255),
    diameter character varying(255),
    edge character varying(255),
    payment_terms character varying(255),
    price character varying(255),
    price_terms character varying(255),
    product character varying(255),
    quantity character varying(255),
    specification character varying(255),
    surface_finish character varying(255),
    thickness character varying(255),
    unit_max_weight character varying(255),
    unit_min_weight character varying(255),
    usage character varying(255),
    width character varying(255)
);


ALTER TABLE public.offersheet OWNER TO postgres;

--
-- Name: offersheet_offer_sheet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.offersheet_offer_sheet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.offersheet_offer_sheet_id_seq OWNER TO postgres;

--
-- Name: offersheet_offer_sheet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.offersheet_offer_sheet_id_seq OWNED BY public.offersheet.offer_sheet_id;


--
-- Name: quality; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quality (
    available_lab boolean,
    inquiry_id bigint,
    quality_id bigint NOT NULL,
    standard bigint,
    coating_metal_quantity character varying(255),
    coating_oil_quantity character varying(255),
    customerqreq character varying(255),
    final_result text NOT NULL,
    final_result_details text,
    order_category character varying(255),
    order_edge character varying(255),
    require_add_contents text,
    thickness_tolerance character varying(255)
);


ALTER TABLE public.quality OWNER TO postgres;

--
-- Name: quality_quality_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quality_quality_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quality_quality_id_seq OWNER TO postgres;

--
-- Name: quality_quality_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quality_quality_id_seq OWNED BY public.quality.quality_id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    contract smallint,
    created_date timestamp(6) without time zone,
    inquiry_id bigint,
    modified_date timestamp(6) without time zone,
    review_id bigint NOT NULL,
    attachment_file text NOT NULL,
    final_review_text text NOT NULL,
    review_text text NOT NULL,
    thickness_notify character varying(255),
    ts_review_req text NOT NULL,
    CONSTRAINT reviews_contract_check CHECK (((contract >= 0) AND (contract <= 1)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_review_id_seq OWNER TO postgres;

--
-- Name: reviews_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_review_id_seq OWNED BY public.reviews.review_id;


--
-- Name: voc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voc (
    inquiry_id bigint,
    voc_id bigint NOT NULL,
    contents text NOT NULL,
    files text,
    title character varying(255)
);


ALTER TABLE public.voc OWNER TO postgres;

--
-- Name: voc_voc_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voc_voc_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voc_voc_id_seq OWNER TO postgres;

--
-- Name: voc_voc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voc_voc_id_seq OWNED BY public.voc.voc_id;


--
-- Name: car_line_items line_item_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_line_items ALTER COLUMN line_item_id SET DEFAULT nextval('public.car_line_items_line_item_id_seq'::regclass);


--
-- Name: customers customer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN customer_id SET DEFAULT nextval('public.customers_customer_id_seq'::regclass);


--
-- Name: inquiry inquiry_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inquiry ALTER COLUMN inquiry_id SET DEFAULT nextval('public.inquiry_inquiry_id_seq'::regclass);


--
-- Name: managers manager_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.managers ALTER COLUMN manager_id SET DEFAULT nextval('public.managers_manager_id_seq'::regclass);


--
-- Name: offersheet offer_sheet_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet ALTER COLUMN offer_sheet_id SET DEFAULT nextval('public.offersheet_offer_sheet_id_seq'::regclass);


--
-- Name: quality quality_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quality ALTER COLUMN quality_id SET DEFAULT nextval('public.quality_quality_id_seq'::regclass);


--
-- Name: reviews review_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN review_id SET DEFAULT nextval('public.reviews_review_id_seq'::regclass);


--
-- Name: voc voc_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voc ALTER COLUMN voc_id SET DEFAULT nextval('public.voc_voc_id_seq'::regclass);


--
-- Data for Name: car_line_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.car_line_items (contract, is_activated, m_tolerance, p_tolerance, quantity, created_date, desired_delivery_date, inquiry_id, line_item_id, modified_date, sop, bc_amount, coating_another_condition, coating_condition, coating_unit, complete_vehicle, customer_name, delivery_destination, direction, expense_per_year, fc_amount, ix_plate, kind, lab, orders, part_name, pjt_name, post_treatment, qs_requirement, ra_another_unit, ra_target, ra_unit, regulation, sales_vehicle_name, standard_org, thickness, width) FROM stdin;
1	t	5	5	100	2024-08-05 18:11:05.576309	2024-12-31 00:00:00	1	1	2024-08-05 18:11:05.576309	2025-01-01 00:00:00	1000	TEST	TEST	TEST	Vehicle X	ABC Corp	Factory A	TEST	10000	2000	TEST	CAR	TEST	TEST	Part A	Project X	TEST	QS9000	TEST	99.9%	TEST	TEST	Car Model X	TEST	2mm	1500mm
0	t	3	3	200	2024-08-05 18:11:05.576309	2025-01-31 00:00:00	2	2	2024-08-05 18:11:05.576309	2025-02-01 00:00:00	2000	TEST_LAB	TEST_LAB	TEST_LAB	Vehicle Y	XYZ Inc	Factory B	TEST_LAB	20000	3000	TEST_LAB	STEEL	TEST_LAB	TEST_LAB	Part B	Project Y	TEST_LAB	ISO9001	TEST_LAB	99.5%	TEST_LAB	TEST_LAB	Car Model Y	TEST_LAB	3mm	1800mm
1	f	4	4	150	2024-08-05 18:11:05.576309	2025-02-28 00:00:00	3	3	2024-08-05 18:11:05.576309	2025-03-01 00:00:00	1500	TEST	TEST_LAB	TEST	Vehicle Z	123 Industries	Factory C	TEST_LAB	15000	2500	TEST	CAR	TEST_LAB	TEST	Part C	Project Z	TEST	IATF16949	TEST	99.7%	TEST_LAB	TEST	Car Model Z	TEST_LAB	2.5mm	1650mm
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (is_activated, created_date, customer_id, modified_date, customer_code, customer_name, email, name, password, phone) FROM stdin;
t	2024-08-05 18:11:05.56871	1	2024-08-05 18:11:05.56871	CUST001	ABC Corp	contact@abccorp.com	Alice Brown	hashedPassword111	+1123456789
t	2024-08-05 18:11:05.56871	2	2024-08-05 18:11:05.56871	CUST002	XYZ Inc	info@xyzinc.com	Bob Wilson	hashedPassword222	+1987654321
f	2024-08-05 18:11:05.56871	3	2024-08-05 18:11:05.56871	CUST003	123 Industries	support@123industries.com	Charlie Davis	hashedPassword333	+1135792468
\.


--
-- Data for Name: inquiry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inquiry (department, is_activated, customer_id, inquiry_id, additional_requests, corporate, corporation_code, country, customer_request_date, elapsed_days, files, industry, inquiry_type, product_type, progress, quality_manager, response_deadline, sales_manager, sales_person) FROM stdin;
0	t	1	1	Urgent request	ABC Corp	CORP001	USA	2024-08-05	2	file1.pdf,file2.pdf	AUTOMOBILE	QUOTE_INQUIRY	COLD_ROLLED_GENERAL	INITIAL_REVIEW	Quality Manager 1	2024-08-10	Sales Manager 1	Sales Person 1
1	t	2	2	Standard inquiry	XYZ Inc	CORP002	CANADA	2024-08-06	1	file3.pdf	CONSTRUCTION	QUALITY_INQUIRY	HOT_ROLLED_GENERAL	QUALITY_REQUESTED	Quality Manager 2	2024-08-15	Sales Manager 2	Sales Person 2
2	f	3	3	Follow-up request	123 Industries	CORP003	JAPAN	2024-08-07	3	file4.pdf,file5.pdf	ELECTRIC	COMMON_INQUIRY	SURFACE_TREATED_GENERAL	FINAL_REVIEW_COMPLETED	Quality Manager 3	2024-08-20	Sales Manager 3	Sales Person 3
\.


--
-- Data for Name: managers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.managers (is_activated, created_date, manager_id, modified_date, department, email, emp_no, name, password, phone, role) FROM stdin;
t	2024-08-05 18:11:05.538922	1	2024-08-05 18:11:05.538922	SALES	john.doe@example.com	EMP001	John Doe	hashedPassword123	+1234567890	SALES
t	2024-08-05 18:11:05.538922	2	2024-08-05 18:11:05.538922	FINANCE	jane.smith@example.com	EMP002	Jane Smith	hashedPassword456	+1987654321	QUALITY
t	2024-08-05 18:11:05.538922	3	2024-08-05 18:11:05.538922	IT	mike.johnson@example.com	EMP003	Mike Johnson	hashedPassword789	+1122334455	SALES
\.


--
-- Data for Name: offersheet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.offersheet (shipment, validity, customer_id, inquiry_id, offer_sheet_id, destination, diameter, edge, payment_terms, price, price_terms, product, quantity, specification, surface_finish, thickness, unit_max_weight, unit_min_weight, usage, width) FROM stdin;
2024-09-01	2024-12-31	1	1	1	Factory A	500mm	Smooth	Net 30	50000	CIF	Steel Sheet	1000 units	Spec XYZ	Polished	2mm	1000kg	900kg	Automotive	1500mm
2024-10-01	2025-01-31	2	2	2	Factory B	600mm	Rough	Net 45	75000	FOB	Steel Plate	1500 units	Spec ABC	Matte	3mm	1200kg	1100kg	Construction	1800mm
2024-11-01	2025-02-28	3	3	3	Factory C	550mm	Beveled	Net 60	60000	EXW	Steel Rod	1200 units	Spec DEF	Brushed	2.5mm	1100kg	1000kg	Manufacturing	1650mm
\.


--
-- Data for Name: quality; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quality (available_lab, inquiry_id, quality_id, standard, coating_metal_quantity, coating_oil_quantity, customerqreq, final_result, final_result_details, order_category, order_edge, require_add_contents, thickness_tolerance) FROM stdin;
t	1	1	1	10g/m2	5g/m2	Customer Quality Requirement 1	Passed	All tests passed successfully	Category A	Smooth	Additional requirement details 1	±0.1mm
f	2	2	2	15g/m2	7g/m2	Customer Quality Requirement 2	Failed	Some tests failed, see details	Category B	Rough	Additional requirement details 2	±0.2mm
t	3	3	3	12g/m2	6g/m2	Customer Quality Requirement 3	Passed with conditions	Most tests passed, minor issues noted	Category C	Beveled	Additional requirement details 3	±0.15mm
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (contract, created_date, inquiry_id, modified_date, review_id, attachment_file, final_review_text, review_text, thickness_notify, ts_review_req) FROM stdin;
1	2024-08-05 18:11:05.588442	1	2024-08-05 18:11:05.588442	1	review_attachment1.pdf	Final review completed and approved	Initial review text 1	Thickness within tolerance	Technical specification review required
0	2024-08-05 18:11:05.588442	2	2024-08-05 18:11:05.588442	2	review_attachment2.pdf	Final review completed with comments	Initial review text 2	Thickness slightly out of tolerance	Additional technical review needed
1	2024-08-05 18:11:05.588442	3	2024-08-05 18:11:05.588442	3	review_attachment3.pdf	Final review pending additional information	Initial review text 3	Thickness measurement to be repeated	Awaiting customer clarification on specifications
\.


--
-- Data for Name: voc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voc (inquiry_id, voc_id, contents, files, title) FROM stdin;
1	1	Customer reported a minor issue with the packaging	voc_report1.pdf	Packaging Feedback
2	2	Customer praised the product quality but requested faster delivery	voc_report2.pdf,customer_email.pdf	Delivery Time Improvement
3	3	Customer suggested improvements for the product documentation	voc_report3.pdf,suggestion_doc.docx	Documentation Enhancement Request
\.


--
-- Name: car_line_items_line_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.car_line_items_line_item_id_seq', 3, true);


--
-- Name: customers_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_customer_id_seq', 3, true);


--
-- Name: inquiry_inquiry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inquiry_inquiry_id_seq', 3, true);


--
-- Name: managers_manager_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.managers_manager_id_seq', 3, true);


--
-- Name: offersheet_offer_sheet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.offersheet_offer_sheet_id_seq', 3, true);


--
-- Name: quality_quality_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quality_quality_id_seq', 3, true);


--
-- Name: reviews_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_review_id_seq', 3, true);


--
-- Name: voc_voc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voc_voc_id_seq', 3, true);


--
-- Name: car_line_items car_line_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_line_items
    ADD CONSTRAINT car_line_items_pkey PRIMARY KEY (line_item_id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- Name: inquiry inquiry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inquiry
    ADD CONSTRAINT inquiry_pkey PRIMARY KEY (inquiry_id);


--
-- Name: managers managers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.managers
    ADD CONSTRAINT managers_pkey PRIMARY KEY (manager_id);


--
-- Name: offersheet offersheet_customer_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet
    ADD CONSTRAINT offersheet_customer_id_key UNIQUE (customer_id);


--
-- Name: offersheet offersheet_inquiry_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet
    ADD CONSTRAINT offersheet_inquiry_id_key UNIQUE (inquiry_id);


--
-- Name: offersheet offersheet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet
    ADD CONSTRAINT offersheet_pkey PRIMARY KEY (offer_sheet_id);


--
-- Name: quality quality_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quality
    ADD CONSTRAINT quality_pkey PRIMARY KEY (quality_id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);


--
-- Name: voc voc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voc
    ADD CONSTRAINT voc_pkey PRIMARY KEY (voc_id);


--
-- Name: car_line_items fk7kspx2ebtqc510ouwym39vkrq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_line_items
    ADD CONSTRAINT fk7kspx2ebtqc510ouwym39vkrq FOREIGN KEY (inquiry_id) REFERENCES public.inquiry(inquiry_id);


--
-- Name: reviews fka2jkj7dm6685tjs429iu911t3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT fka2jkj7dm6685tjs429iu911t3 FOREIGN KEY (inquiry_id) REFERENCES public.inquiry(inquiry_id);


--
-- Name: quality fke3agm2m2i71c1igntgpr4pion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quality
    ADD CONSTRAINT fke3agm2m2i71c1igntgpr4pion FOREIGN KEY (inquiry_id) REFERENCES public.inquiry(inquiry_id);


--
-- Name: offersheet fkfoqr471j00t5og8ubojimbnj7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet
    ADD CONSTRAINT fkfoqr471j00t5og8ubojimbnj7 FOREIGN KEY (customer_id) REFERENCES public.customers(customer_id);


--
-- Name: offersheet fkmroigd11971x9o3xjrwcx44dw; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offersheet
    ADD CONSTRAINT fkmroigd11971x9o3xjrwcx44dw FOREIGN KEY (inquiry_id) REFERENCES public.inquiry(inquiry_id);


--
-- Name: voc fkqsyb2viqf4lf74wnedl97x3c8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voc
    ADD CONSTRAINT fkqsyb2viqf4lf74wnedl97x3c8 FOREIGN KEY (inquiry_id) REFERENCES public.inquiry(inquiry_id);


--
-- Name: inquiry fksig243d8pl34gctfx8ud0ev4m; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inquiry
    ADD CONSTRAINT fksig243d8pl34gctfx8ud0ev4m FOREIGN KEY (customer_id) REFERENCES public.customers(customer_id);


--
-- PostgreSQL database dump complete
--

