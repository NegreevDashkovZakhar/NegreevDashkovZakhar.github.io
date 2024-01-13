import psycopg2
from psycopg2 import sql
from datetime import datetime

db_params = {
    'host': 'localhost',
    'database': 'tab_em_db',
    'user': 'tab_em_user',
    'password': 'pass1234',
    'port': '5432',
}

connection = psycopg2.connect(**db_params)

default_content = """
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://negreevdashkovzakhar.github.io/</loc>
  <lastmod>2023-12-22T21:39:59+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://negreevdashkovzakhar.github.io/artists.html</loc>
  <lastmod>2023-12-22T21:39:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
"""
ending_content = """
</urlset>
"""

today = datetime.now()
time = today.strftime("%Y-%m-%dT%H:%M:%S")


def get_all_songs():
  cursor = connection.cursor()
  table_name = 'songs'
  select_query = sql.SQL("SELECT * FROM {}").format(sql.Identifier(table_name))
  cursor.execute(select_query)
  rows = cursor.fetchall()
  result = ''
  for row in rows:
      result += f"""
<url>
  <loc>https://negreevdashkovzakhar.github.io/song_page.html?id={row[0]}</loc>
  <lastmod>{time}+00:00</lastmod>
  <priority>0.80</priority>
</url>
"""
  cursor.close()
  return result


def get_all_artists():
  cursor = connection.cursor()
  table_name = 'artists'
  select_query = sql.SQL("SELECT * FROM {}").format(sql.Identifier(table_name))
  cursor.execute(select_query)
  rows = cursor.fetchall()
  result = ''
  for row in rows:
      result += f"""
<url>
  <loc>https://negreevdashkovzakhar.github.io/artist_page.html?id={row[0]}</loc>
  <lastmod>{time}+00:00</lastmod>
  <priority>0.80</priority>
</url>
"""
  cursor.close()
  return result


with open("generate_sitemap.xml", "w") as file:
    file.write(default_content)
    file.write(get_all_songs())
    file.write(get_all_artists())
    file.write(ending_content)

connection.close()
