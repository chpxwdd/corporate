const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaHotelbedsContentLocationsCountries = new Schema()
schemaHotelbedsContentLocationsCountries.set('collection', 'hotelbeds.content.locations.countries')
schemaHotelbedsContentLocationsCountries.add({
  code: { type: String },
  isoCode: { type: String },
  description: {
    languageCode: { type: String, uppercase: true, trim: true, require: true, default: 'ENG' },
    content: { type: String },
  },
})

const schemaHotelbedsContentLocationsDestinations = new Schema()
schemaHotelbedsContentLocationsDestinations.set('collection', 'hotelbeds.content.locations.destinations')
schemaHotelbedsContentLocationsDestinations.add({
  code: { type: String },
  isoCode: { type: String, uppercase: true, trim: true },
  countryCode: { type: String },
  name: {
    languageCode: { type: String, uppercase: true, trim: true, require: true, default: 'ENG' },
    content: { type: String, require: true },
  },
  zones: [
    {
      zoneCode: { type: Number },
      name: { type: String },
      description: {
        languageCode: { type: String, uppercase: true, trim: true, require: true, default: 'ENG' },
        content: { type: String },
      },
    },
  ],
  groupZones: [
    {
      groupZoneCode: { type: String },
      name: {
        languageCode: { type: String, uppercase: true, trim: true, require: true, default: 'ENG' },
        content: { type: String },
      },
      zones: [{ type: Number }],
    },
  ],
})

module.exports = {
  HotelbedsContentLocationsCountries: mongoose.model('countries', schemaHotelbedsContentLocationsCountries),
  HotelbedsContentLocationsDestinations: mongoose.model('destinations', schemaHotelbedsContentLocationsDestinations),
}
