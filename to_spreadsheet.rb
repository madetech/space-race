require 'json'
require 'csv'

File.open("#{__dir__}/frontend/public/api.json", "r") do |file|
  venues = JSON.parse(file.read)

  csv = CSV.generate do |csv|
    csv << venues.first.keys
    venues.each do |venue|

      csv << venue.values
    end
  end
  puts csv
end
