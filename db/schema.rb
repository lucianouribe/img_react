# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171207202002) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carrusels", force: :cascade do |t|
    t.string   "name",                 null: false
    t.string   "image",                null: false
    t.string   "infopic"
    t.string   "role",                 null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.text     "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "descripcions", force: :cascade do |t|
    t.string   "campo"
    t.string   "titulo"
    t.text     "contenido"
    t.string   "lenguaje"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "morses", force: :cascade do |t|
    t.string   "inphrase"
    t.string   "outphrase"
    t.string   "lang_first"
    t.string   "lang_second"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "panoramicos", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pasos", force: :cascade do |t|
    t.text     "step"
    t.integer  "orden"
    t.string   "estilo"
    t.string   "tuto_link"
    t.string   "video_link"
    t.string   "image_link"
    t.integer  "proyecto_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["proyecto_id"], name: "index_pasos_on_proyecto_id", using: :btree
  end

  create_table "procoms", force: :cascade do |t|
    t.text     "pro_content"
    t.string   "pro_style"
    t.integer  "pro_order"
    t.string   "type_of_issue"
    t.integer  "paso_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["paso_id"], name: "index_procoms_on_paso_id", using: :btree
  end

  create_table "proyectos", force: :cascade do |t|
    t.string   "name"
    t.string   "topic"
    t.string   "subtopic"
    t.string   "difficulty"
    t.integer  "order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "translators", force: :cascade do |t|
    t.string   "inphrase"
    t.string   "outphrase"
    t.string   "lang_first"
    t.string   "lang_second"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "role"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "pasos", "proyectos"
  add_foreign_key "procoms", "pasos"
end
