-- Table: public.item_master

-- DROP TABLE public.item_master;

CREATE TABLE public.item_master
(
  branch_id integer NOT NULL,
  item_id integer NOT NULL,
  name character varying(120) NOT NULL,
  category integer NOT NULL,
  ingrediants text,
  description text,
  price integer NOT NULL,
  discount integer NOT NULL default 0,
  is_veg smallint default 0,
  is_special smallint default 0,
  is_availabe smallint default 0,
  insert_ts bigint NOT NULL,
  created_ts bigint NOT NULL,
  created_by character varying(120) NOT NULL,
  updated_ts bigint NOT NULL,
  updated_by character varying(120) NOT NULL,
  CONSTRAINT item_master_pkey PRIMARY KEY (item_id)
)
WITH (
  OIDS=FALSE
);

