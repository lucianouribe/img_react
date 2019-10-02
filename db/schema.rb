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

ActiveRecord::Schema.define(version: 20191002200506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "carrusels", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.string "image", null: false
    t.string "infopic"
    t.string "role", null: false
    t.string "picture_file_name"
    t.string "picture_content_type"
    t.integer "picture_file_size"
    t.datetime "picture_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "descripcions", id: :serial, force: :cascade do |t|
    t.string "campo"
    t.string "titulo"
    t.text "contenido"
    t.string "lenguaje"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "german_games", force: :cascade do |t|
    t.integer "lifes"
    t.integer "punctuation"
    t.integer "punctuation_4_total"
    t.integer "level"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "themes"
    t.index ["user_id"], name: "index_german_games_on_user_id"
  end

  create_table "morses", id: :serial, force: :cascade do |t|
    t.string "inphrase"
    t.string "outphrase"
    t.string "lang_first"
    t.string "lang_second"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pasos", id: :serial, force: :cascade do |t|
    t.text "step"
    t.integer "orden"
    t.string "estilo"
    t.integer "procom_link"
    t.string "video_link"
    t.string "image_link"
    t.string "picture_file_name"
    t.string "picture_content_type"
    t.integer "picture_file_size"
    t.datetime "picture_updated_at"
    t.integer "proyecto_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["proyecto_id"], name: "index_pasos_on_proyecto_id"
  end

  create_table "phrases", force: :cascade do |t|
    t.string "phrase_type"
    t.string "theme"
    t.string "subtheme"
    t.text "phrase_praesens"
    t.text "phrase_praeteritum"
    t.text "phrase_futur_i"
    t.text "phrase_perfekt"
    t.text "phrase_plusquamperfekt"
    t.text "phrase_futur_ii"
    t.string "phrase_ch"
    t.string "phrase_verb"
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "procoms", id: :serial, force: :cascade do |t|
    t.text "pro_content"
    t.string "pro_style"
    t.integer "pro_order"
    t.string "type_of_issue"
    t.integer "paso_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["paso_id"], name: "index_procoms_on_paso_id"
  end

  create_table "proyectos", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "topic"
    t.string "subtopic"
    t.string "difficulty"
    t.integer "orden"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "translators", id: :serial, force: :cascade do |t|
    t.string "inphrase"
    t.string "outphrase"
    t.string "lang_first"
    t.string "lang_second"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.integer "german_game"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "verbs", force: :cascade do |t|
    t.string "verb_type"
    t.string "theme"
    t.string "subtheme"
    t.string "infinitive"
    t.text "praesens"
    t.text "praeteritum"
    t.text "futur_i"
    t.text "perfekt"
    t.text "plusquamperfekt"
    t.text "futur_ii"
    t.string "ch"
    t.string "level"
    t.string "picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "partizip_perfekt"
  end

  create_table "words", force: :cascade do |t|
    t.string "word_type"
    t.string "theme"
    t.string "subtheme"
    t.string "noun"
    t.string "article"
    t.string "plural"
    t.string "ch"
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "german_games", "users"
  add_foreign_key "pasos", "proyectos"
  add_foreign_key "procoms", "pasos"
end
