json.extract! api_descripcion, :id, :campo, :titulo, :contenido, :lenguaje
json.url api_descripcion_url(api_descripcion, format: :json)
