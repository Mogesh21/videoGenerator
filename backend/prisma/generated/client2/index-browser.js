
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  email_verified_at: 'email_verified_at',
  password: 'password',
  role: 'role',
  access_list: 'access_list',
  accountAccessModule: 'accountAccessModule',
  accountAccessPrivilege: 'accountAccessPrivilege',
  image_type: 'image_type',
  remember_token: 'remember_token',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AppsScalarFieldEnum = {
  app_id: 'app_id',
  app_name: 'app_name',
  app_name_ref_id: 'app_name_ref_id',
  package_name: 'package_name',
  app_survey_data_dynamic_table: 'app_survey_data_dynamic_table',
  is_active: 'is_active',
  img_url: 'img_url',
  img_upload_type: 'img_upload_type',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Background_musicScalarFieldEnum = {
  id: 'id',
  language_id: 'language_id',
  language_code: 'language_code',
  music_name: 'music_name',
  musicthumbuploadtype: 'musicthumbuploadtype',
  music_thumbimage: 'music_thumbimage',
  musicuploadtype: 'musicuploadtype',
  musicDuration: 'musicDuration',
  music_url: 'music_url',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Background_music_appsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  language_id: 'language_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Background_music_copyright_claimsScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  song_id: 'song_id',
  user_id: 'user_id',
  email: 'email',
  relation: 'relation',
  company: 'company',
  link: 'link',
  publication_date: 'publication_date',
  reason: 'reason',
  description: 'description',
  supporting_evidence: 'supporting_evidence',
  device_type: 'device_type',
  package_name: 'package_name',
  app_name: 'app_name',
  device_id: 'device_id',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_develop_or_prod: 'is_develop_or_prod',
  app_id: 'app_id',
  checkbox1: 'checkbox1',
  checkbox2: 'checkbox2',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Banner_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  package_name: 'package_name',
  language_code: 'language_code',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  app_version: 'app_version',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Banner_category_listsScalarFieldEnum = {
  id: 'id',
  language_name: 'language_name',
  language_code: 'language_code',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Banner_image_typesScalarFieldEnum = {
  id: 'id',
  banner_name: 'banner_name',
  banner_types: 'banner_types',
  admin_id: 'admin_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Banner_imagesScalarFieldEnum = {
  id: 'id',
  banner_name: 'banner_name',
  banner_image_url: 'banner_image_url',
  banner_image_url_type: 'banner_image_url_type',
  banner_type: 'banner_type',
  language_code: 'language_code',
  banner_start_date: 'banner_start_date',
  banner_end_date: 'banner_end_date',
  festivel_date: 'festivel_date',
  festivel_name: 'festivel_name',
  festivel_web_url: 'festivel_web_url',
  promotion_name: 'promotion_name',
  promotion_web_url: 'promotion_web_url',
  verse_number: 'verse_number',
  book_number: 'book_number',
  chapter_number: 'chapter_number',
  video_type: 'video_type',
  video_url: 'video_url',
  feature_name: 'feature_name',
  subscription_type: 'subscription_type',
  admin_id: 'admin_id',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Banner_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  language_id: 'language_id',
  language_code: 'language_code',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_feelingsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  date_time_at: 'date_time_at',
  user_id: 'user_id',
  device_type: 'device_type',
  feeling_flag: 'feeling_flag',
  app_id: 'app_id',
  app_type: 'app_type',
  package_name: 'package_name',
  language: 'language',
  country_code: 'country_code',
  os_version: 'os_version',
  app_version: 'app_version',
  theme_mode: 'theme_mode',
  device_id: 'device_id',
  device_model: 'device_model',
  is_develop_or_prod: 'is_develop_or_prod',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_praisesScalarFieldEnum = {
  id: 'id',
  praises_name: 'praises_name',
  book_number: 'book_number',
  chapter_number: 'chapter_number',
  verse_number: 'verse_number',
  praise_image: 'praise_image',
  image_url: 'image_url',
  path: 'path',
  image_type: 'image_type',
  category_id: 'category_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_praises_appsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_praises_categoriesScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_image: 'category_image',
  image_url: 'image_url',
  path: 'path',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_praises_mapped_appsScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bible_verse_reportsScalarFieldEnum = {
  id: 'id',
  device_type: 'device_type',
  package_name: 'package_name',
  app_name: 'app_name',
  device_id: 'device_id',
  device_name: 'device_name',
  device_model: 'device_model',
  android_app_version: 'android_app_version',
  ios_app_version: 'ios_app_version',
  os_version: 'os_version',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_develop_or_prod: 'is_develop_or_prod',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  verse_detail: 'verse_detail',
  report_reason: 'report_reason',
  app_id: 'app_id',
  user_id: 'user_id',
  db_updated_app_version: 'db_updated_app_version',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BooksScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_num: 'book_num',
  title: 'title',
  short_title: 'short_title',
  total_chap_count: 'total_chap_count',
  created_at: 'created_at',
  updated_at: 'updated_at',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  uploadedid: 'uploadedid'
};

exports.Prisma.Bulk_video_uploadsScalarFieldEnum = {
  id: 'id',
  file_name: 'file_name',
  video_file: 'video_file',
  festivel_id: 'festivel_id',
  delated_at: 'delated_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CalcsScalarFieldEnum = {
  id: 'id',
  video: 'video',
  downloads: 'downloads',
  image_id: 'image_id',
  video_id: 'video_id',
  facebook_share: 'facebook_share',
  whatsapp_share: 'whatsapp_share',
  twitter_share: 'twitter_share',
  created_at: 'created_at',
  updated_at: 'updated_at',
  likes: 'likes',
  device_id: 'device_id',
  login_id: 'login_id'
};

exports.Prisma.Calendar_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Calendar_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Calendar_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CalendarsScalarFieldEnum = {
  id: 'id',
  festivel_title: 'festivel_title',
  festivel_date: 'festivel_date',
  festivel_short_description: 'festivel_short_description',
  festivel_description: 'festivel_description',
  festivel_description_type: 'festivel_description_type',
  book_number: 'book_number',
  start_verse_number: 'start_verse_number',
  end_verse_number: 'end_verse_number',
  chapter_number: 'chapter_number',
  festivel_type: 'festivel_type',
  festivel_image: 'festivel_image',
  image_type: 'image_type',
  district: 'district',
  country: 'country',
  state: 'state',
  fasting_start_date: 'fasting_start_date',
  fasting_end_date: 'fasting_end_date',
  theme_color: 'theme_color',
  theme_color_type: 'theme_color_type',
  lastfetched_year: 'lastfetched_year',
  background_image: 'background_image',
  background_upload_type: 'background_upload_type',
  year: 'year',
  category_id: 'category_id',
  is_important_flag: 'is_important_flag',
  admin_id: 'admin_id',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  update_version: 'update_version',
  created_at: 'created_at',
  updated_at: 'updated_at',
  icon: 'icon'
};

exports.Prisma.CalendernotesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at',
  date: 'date',
  login_id: 'login_id'
};

exports.Prisma.ChaptersScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  chapter_name: 'chapter_name',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status',
  uploadnotprocess: 'uploadnotprocess',
  chapter_num: 'chapter_num'
};

exports.Prisma.ChurchesScalarFieldEnum = {
  id: 'id',
  churchtypeid: 'churchtypeid',
  churchname: 'churchname',
  aboutchurch: 'aboutchurch',
  countryid: 'countryid',
  stateid: 'stateid',
  districtid: 'districtid',
  cityid: 'cityid',
  shortaddress: 'shortaddress',
  address: 'address',
  latitude: 'latitude',
  longitude: 'longitude',
  openingsunday: 'openingsunday',
  closingsunday: 'closingsunday',
  openingmonday: 'openingmonday',
  closingmonday: 'closingmonday',
  openingtuesday: 'openingtuesday',
  closingtuesday: 'closingtuesday',
  openingwednesday: 'openingwednesday',
  closingwednesday: 'closingwednesday',
  openingthursday: 'openingthursday',
  closingthursday: 'closingthursday',
  openingfriday: 'openingfriday',
  closingfriday: 'closingfriday',
  openingsaturday: 'openingsaturday',
  closingsaturday: 'closingsaturday',
  profileimage: 'profileimage',
  galleryimages: 'galleryimages',
  created_at: 'created_at',
  updated_at: 'updated_at',
  sundaystatus: 'sundaystatus',
  mondaystatus: 'mondaystatus',
  tuesdaystatus: 'tuesdaystatus',
  wednesdaystatus: 'wednesdaystatus',
  thursdaystatus: 'thursdaystatus',
  fridaystatus: 'fridaystatus',
  saturdaystatus: 'saturdaystatus',
  mobileno: 'mobileno',
  emailid: 'emailid'
};

exports.Prisma.ChurchtypesScalarFieldEnum = {
  id: 'id',
  typename: 'typename',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CitiesScalarFieldEnum = {
  id: 'id',
  cityname: 'cityname',
  country_id: 'country_id',
  state_id: 'state_id',
  district_id: 'district_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  country_id: 'country_id',
  region_id: 'region_id',
  city: 'city'
};

exports.Prisma.ContactsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  subject: 'subject',
  message: 'message',
  created_at: 'created_at',
  updated_at: 'updated_at',
  mobile: 'mobile'
};

exports.Prisma.CounsScalarFieldEnum = {
  id: 'id',
  countryname: 'countryname',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CountriesScalarFieldEnum = {
  id: 'id',
  iso: 'iso',
  name: 'name',
  nicename: 'nicename',
  iso3: 'iso3',
  numcode: 'numcode',
  phonecode: 'phonecode'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  country: 'country'
};

exports.Prisma.Country_productsScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  country_code: 'country_code',
  product_link: 'product_link',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_active: 'is_active',
  deleted_at: 'deleted_at'
};

exports.Prisma.D_survey_resp_10_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_11_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_12_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  survey_reponse_id: 'survey_reponse_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_13_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_14_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_15_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_16_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_17_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_18_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_19_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_1_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_20_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_21_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_22_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_23_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_24_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_2_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_3_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_8_1ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_10_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_11_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_12_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_13_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  survey_reponse_id: 'survey_reponse_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_15_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_16_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_17_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_18_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_19_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_1_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_20_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_21_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_22_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_23_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_24_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_2_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_3_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  survey_reponse_id: 'survey_reponse_id',
  question_id: 'question_id',
  answer_option: 'answer_option',
  answer_text: 'answer_text',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_survey_resp_ans_8_2ScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  survey_id: 'survey_id',
  email: 'email',
  comments: 'comments',
  user_id: 'user_id',
  device_udid: 'device_udid',
  device_type: 'device_type',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_name: 'app_name',
  package_name: 'package_name',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Daily_versesScalarFieldEnum = {
  id: 'id',
  date_at: 'date_at',
  mrg_verse_enable: 'mrg_verse_enable',
  book_number_mrg: 'book_number_mrg',
  chapter_number_mrg: 'chapter_number_mrg',
  start_verse_number_mrg: 'start_verse_number_mrg',
  end_verse_number_mrg: 'end_verse_number_mrg',
  aft_verse_enable: 'aft_verse_enable',
  book_number_aft: 'book_number_aft',
  chapter_number_aft: 'chapter_number_aft',
  start_verse_number_aft: 'start_verse_number_aft',
  end_verse_number_aft: 'end_verse_number_aft',
  eve_verse_enable: 'eve_verse_enable',
  book_number_eve: 'book_number_eve',
  chapter_number_eve: 'chapter_number_eve',
  start_verse_number_eve: 'start_verse_number_eve',
  end_verse_number_eve: 'end_verse_number_eve',
  update_version: 'update_version',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Device_name_listsScalarFieldEnum = {
  id: 'id',
  device_id: 'device_id',
  device_name: 'device_name',
  app_id: 'app_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DistrictsScalarFieldEnum = {
  id: 'id',
  districtname: 'districtname',
  country_id: 'country_id',
  state_id: 'state_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Event_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Event_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Event_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Event_sub_categoriesScalarFieldEnum = {
  id: 'id',
  sub_category_name: 'sub_category_name',
  sub_category_description: 'sub_category_description',
  sub_category_image: 'sub_category_image',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  event_name: 'event_name',
  event_description: 'event_description',
  event_short_description: 'event_short_description',
  event_start_date: 'event_start_date',
  event_end_date: 'event_end_date',
  event_address: 'event_address',
  event_address_2: 'event_address_2',
  event_landmark: 'event_landmark',
  event_district: 'event_district',
  event_country: 'event_country',
  event_state: 'event_state',
  event_pincode: 'event_pincode',
  longitude: 'longitude',
  latitude: 'latitude',
  event_url: 'event_url',
  event_image: 'event_image',
  image_type: 'image_type',
  event_video: 'event_video',
  video_upload_type: 'video_upload_type',
  thumb_image: 'thumb_image',
  thumb_upload_type: 'thumb_upload_type',
  category_id: 'category_id',
  admin_id: 'admin_id',
  verified: 'verified',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Events_modulesScalarFieldEnum = {
  id: 'id',
  module_name: 'module_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Example_tableScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Fm_radiosScalarFieldEnum = {
  id: 'id',
  fm_name: 'fm_name',
  image_url: 'image_url',
  path: 'path',
  fm_image: 'fm_image',
  fm_streaming_url: 'fm_streaming_url',
  country_id: 'country_id',
  state_id: 'state_id',
  city_id: 'city_id',
  language_id: 'language_id',
  language_code: 'language_code',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Form_multiple_uploadsScalarFieldEnum = {
  id: 'id',
  filename: 'filename',
  image_file: 'image_file',
  frstivel_id: 'frstivel_id',
  delated_at: 'delated_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FornavigatesScalarFieldEnum = {
  id: 'id',
  page: 'page',
  window: 'window',
  selectedcolor: 'selectedcolor',
  highlightwindow: 'highlightwindow',
  noteswindow: 'noteswindow',
  calendernoteswindow: 'calendernoteswindow',
  dateofcalendernotes: 'dateofcalendernotes',
  status: 'status',
  device_id: 'device_id',
  urlversionname: 'urlversionname',
  urldots: 'urldots',
  created_at: 'created_at',
  updated_at: 'updated_at',
  verse_id: 'verse_id',
  notes: 'notes',
  title: 'title'
};

exports.Prisma.Image_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Image_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_name_2: 'category_name_2',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  image_link: 'image_link'
};

exports.Prisma.Image_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Image_server_infosScalarFieldEnum = {
  id: 'id',
  from_url: 'from_url',
  from_domain_name: 'from_domain_name',
  to_url: 'to_url',
  msg: 'msg',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Image_sub_category_listsScalarFieldEnum = {
  id: 'id',
  sub_category_name: 'sub_category_name',
  sub_category_description: 'sub_category_description',
  sub_category_image: 'sub_category_image',
  image_type: 'image_type',
  category_id: 'category_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  image_link: 'image_link'
};

exports.Prisma.Image_trending_listsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  image_id: 'image_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Image_uploadsScalarFieldEnum = {
  id: 'id',
  image: 'image',
  image_id: 'image_id',
  admin_id: 'admin_id',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ImagesScalarFieldEnum = {
  id: 'id',
  image_name: 'image_name',
  copyright: 'copyright',
  image: 'image',
  image_s3_bucket_url: 'image_s3_bucket_url',
  image_s3_bucket_url_path: 'image_s3_bucket_url_path',
  image_type: 'image_type',
  category_id: 'category_id',
  sub_category_id: 'sub_category_id',
  book_number: 'book_number',
  chapter_number: 'chapter_number',
  verse_number: 'verse_number',
  r_code: 'r_code',
  g_code: 'g_code',
  b_code: 'b_code',
  image_watched_count: 'image_watched_count',
  image_report_count: 'image_report_count',
  report_status: 'report_status',
  admin_id: 'admin_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  image_link: 'image_link'
};

exports.Prisma.LangsScalarFieldEnum = {
  id: 'id',
  lang_name: 'lang_name',
  lang_type: 'lang_type',
  lang_type_str: 'lang_type_str',
  text_to_speech_string: 'text_to_speech_string',
  mp3_base_url: 'mp3_base_url',
  mp3_type: 'mp3_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LanguagesScalarFieldEnum = {
  id: 'id',
  language_name: 'language_name',
  language_code: 'language_code',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Log_activitiesScalarFieldEnum = {
  id: 'id',
  subject: 'subject',
  url: 'url',
  method: 'method',
  ip: 'ip',
  agent: 'agent',
  user_id: 'user_id',
  email: 'email',
  role: 'role',
  time: 'time',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MetasScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  meta_title: 'meta_title',
  meta_description: 'meta_description',
  meta_keywords: 'meta_keywords',
  uploadnotprocess: 'uploadnotprocess',
  uploadedid: 'uploadedid',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.Miracle_prayer_appsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  language_id: 'language_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Miracle_prayersScalarFieldEnum = {
  id: 'id',
  language_id: 'language_id',
  contents: 'contents',
  description: 'description',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ModulesScalarFieldEnum = {
  id: 'id',
  module_name: 'module_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.NotifiesScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  record_id: 'record_id',
  like: 'like',
  save: 'save',
  notes: 'notes',
  facebook_share: 'facebook_share',
  whatsapp_share: 'whatsapp_share',
  twitter_share: 'twitter_share',
  created_at: 'created_at',
  updated_at: 'updated_at',
  login_id: 'login_id',
  bookname: 'bookname',
  colorcode: 'colorcode',
  selectedtext: 'selectedtext',
  highlightstatus: 'highlightstatus',
  device_id: 'device_id',
  device_type: 'device_type',
  app_name: 'app_name',
  verse_num: 'verse_num',
  user_defined_id: 'user_defined_id',
  like_status: 'like_status',
  save_status: 'save_status',
  notes_status: 'notes_status',
  title: 'title'
};

exports.Prisma.Popular_verse_appsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Popular_verse_categoriesScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_image: 'category_image',
  image_url: 'image_url',
  path: 'path',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Popular_verse_mapped_appsScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Popular_versesScalarFieldEnum = {
  id: 'id',
  book_number: 'book_number',
  chapter_number: 'chapter_number',
  verse_number: 'verse_number',
  verse_image: 'verse_image',
  image_url: 'image_url',
  path: 'path',
  image_type: 'image_type',
  category_id: 'category_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prayer_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prayer_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prayer_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PrayersScalarFieldEnum = {
  id: 'id',
  prayer_title: 'prayer_title',
  prayer_date: 'prayer_date',
  prayer_session: 'prayer_session',
  book_number: 'book_number',
  verse_number: 'verse_number',
  end_verse_number: 'end_verse_number',
  chapter_number: 'chapter_number',
  prayer_image: 'prayer_image',
  image_type: 'image_type',
  prayer_copyright_url: 'prayer_copyright_url',
  prayer_video_url: 'prayer_video_url',
  video_upload_type: 'video_upload_type',
  video_thumb_image: 'video_thumb_image',
  video_thumb_upload_type: 'video_thumb_upload_type',
  opening_prayer: 'opening_prayer',
  opning_prayer_type: 'opning_prayer_type',
  closing_prayer: 'closing_prayer',
  closing_prayer_type: 'closing_prayer_type',
  scripture: 'scripture',
  scripture_type: 'scripture_type',
  category_id: 'category_id',
  admin_id: 'admin_id',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Product_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  category_ids: 'category_ids',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Product_categoriesScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  products: 'products',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  product_name: 'product_name',
  product_shortdesc: 'product_shortdesc',
  product_desc: 'product_desc',
  product_type: 'product_type',
  country_code: 'country_code',
  product_week_no: 'product_week_no',
  product_link: 'product_link',
  product_thumb_image: 'product_thumb_image',
  prod_thumb_img_t: 'prod_thumb_img_t',
  last_fetched_timestamp: 'last_fetched_timestamp',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_active: 'is_active',
  deleted_at: 'deleted_at'
};

exports.Prisma.QuotesScalarFieldEnum = {
  id: 'id',
  quotes_name: 'quotes_name',
  author: 'author',
  category_id: 'category_id',
  sub_category_id: 'sub_category_id',
  quotes_type: 'quotes_type',
  quotes_version: 'quotes_version',
  book_number: 'book_number',
  chapter_number: 'chapter_number',
  verse_number: 'verse_number',
  admin_id: 'admin_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Quotes_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Quotes_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_name_2: 'category_name_2',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Quotes_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Quotes_sub_category_listsScalarFieldEnum = {
  id: 'id',
  sub_category_name: 'sub_category_name',
  sub_category_description: 'sub_category_description',
  sub_category_image: 'sub_category_image',
  image_type: 'image_type',
  category_id: 'category_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record0ScalarFieldEnum = {
  id: 'id',
  sdgdgsdg: 'sdgdgsdg'
};

exports.Prisma.Record100ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record101ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record102ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record103ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record104ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record105ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record106ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record107ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record108ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record109ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record11ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record110ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record111ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record112ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record113ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record114ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record115ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record116ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record117ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record118ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record119ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record12ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record120ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record121ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record122ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record123ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record124ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record125ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record126ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record127ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record128ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record129ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record13ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record130ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record131ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record132ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record133ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record134ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record135ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record136ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record137ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record138ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record139ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record14ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record140ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record141ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record142ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record143ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record144ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record145ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record146ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record147ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record148ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record149ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record15ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record150ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record151ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record152ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record153ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record154ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record155ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record156ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record157ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record158ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record159ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record16ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record160ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record161ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record162ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record163ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record164ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record165ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record166ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record167ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record168ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record169ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record17ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record170ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record171ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record172ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record173ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record174ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record175ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record176ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record177ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record178ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record179ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record18ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record180ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record181ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record182ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record183ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record184ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record185ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record186ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record187ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record188ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record189ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record19ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record190ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record191ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record192ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record193ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record194ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record195ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record196ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record197ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record198ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record199ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record2ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record20ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record200ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record201ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record202ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record203ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record204ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record205ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record206ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record207ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record208ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record209ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record21ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record210ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record211ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record212ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record213ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record214ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record215ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record216ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record217ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record218ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record219ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record22ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record220ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record221ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record222ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record223ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record224ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record225ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record226ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record227ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record228ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record229ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record23ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record230ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record231ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record232ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record233ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record234ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record235ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record236ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record237ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record238ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record239ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record24ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record240ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record241ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record242ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record243ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record244ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record245ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record246ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record247ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record248ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record249ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record25ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record250ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record251ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record252ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record253ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record254ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record255ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record256ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record257ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record258ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record259ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record26ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record260ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record261ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record262ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record263ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record264ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record265ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record266ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record267ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record268ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record269ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record27ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record270ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record271ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record272ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record273ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record274ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record275ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record276ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record277ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record278ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record279ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record28ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record280ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record281ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record282ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record283ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record284ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record285ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record286ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record287ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record288ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record289ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record29ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record290ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record291ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record292ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record293ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record294ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record295ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record296ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record297ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record298ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record299ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record3ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record30ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record300ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record301ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record302ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record303ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record304ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record305ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record306ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record307ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record308ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record309ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record31ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record310ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record311ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record312ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record313ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record32ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record33ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record34ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record35ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record36ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record37ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record38ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record39ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record4ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record40ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record41ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record42ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record43ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record44ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record45ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record46ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record47ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record48ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record49ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record50ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record51ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record52ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record53ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record54ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record55ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record56ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record57ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record58ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record59ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record6ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record60ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record61ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record62ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record63ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record64ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record65ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record66ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record67ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record68ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record69ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record70ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record71ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record72ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record73ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record74ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record75ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record76ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record77ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record78ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record79ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record80ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record81ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record82ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record83ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record84ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record85ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record86ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record87ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record88ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record89ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record90ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record91ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record92ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record93ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record94ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record95ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record96ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record97ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record98ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Record99ScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  content: 'content',
  status: 'status',
  meta_keyword: 'meta_keyword',
  meta_description: 'meta_description',
  uploadnotprocess: 'uploadnotprocess',
  version_num: 'version_num',
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  uploadedid: 'uploadedid',
  chapter_id: 'chapter_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RegionScalarFieldEnum = {
  id: 'id',
  country_id: 'country_id',
  region: 'region'
};

exports.Prisma.Report_imagesScalarFieldEnum = {
  id: 'id',
  image_id: 'image_id',
  report_title: 'report_title',
  report_message: 'report_message',
  device_id: 'device_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Report_videosScalarFieldEnum = {
  id: 'id',
  video_id: 'video_id',
  report_title: 'report_title',
  report_message: 'report_message',
  device_id: 'device_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StatesScalarFieldEnum = {
  id: 'id',
  statename: 'statename',
  country_id: 'country_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Status_amensScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  post_id: 'post_id',
  amen_status: 'amen_status',
  praying_status: 'praying_status',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Survey_questionsScalarFieldEnum = {
  question_id: 'question_id',
  question: 'question',
  question_ref_id: 'question_ref_id',
  questionType: 'questionType',
  option_count: 'option_count',
  answer_text: 'answer_text',
  answer: 'answer',
  option_1: 'option_1',
  option_2: 'option_2',
  option_3: 'option_3',
  option_4: 'option_4',
  option_5: 'option_5',
  option_6: 'option_6',
  questionUser: 'questionUser',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SurveysScalarFieldEnum = {
  survey_id: 'survey_id',
  survey_name: 'survey_name',
  survey_title: 'survey_title',
  app_id: 'app_id',
  description: 'description',
  question_ids: 'question_ids',
  survey_resp_dynamic_table: 'survey_resp_dynamic_table',
  survey_resp_ans_dynamic_table: 'survey_resp_ans_dynamic_table',
  is_active: 'is_active',
  img_url: 'img_url',
  img_upload_type: 'img_upload_type',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TempdatasScalarFieldEnum = {
  unique_id: 'unique_id',
  version_id: 'version_id',
  login_id: 'login_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UploadrecordsScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  notes: 'notes',
  options: 'options',
  filepath: 'filepath',
  exactpath: 'exactpath',
  uploadnotprocess: 'uploadnotprocess',
  processstart: 'processstart',
  processed: 'processed',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.UploadversionsScalarFieldEnum = {
  id: 'id',
  version_name: 'version_name',
  uploadedid: 'uploadedid',
  created_at: 'created_at',
  updated_at: 'updated_at',
  processed: 'processed',
  status: 'status',
  version_num: 'version_num',
  metakeywords: 'metakeywords',
  metadescription: 'metadescription'
};

exports.Prisma.UsergetsScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  time: 'time',
  device_id: 'device_id',
  status: 'status'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  remember_token: 'remember_token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  otp_code: 'otp_code',
  google_id: 'google_id',
  google: 'google',
  device_id: 'device_id',
  guest: 'guest',
  facebook_id: 'facebook_id',
  facebook: 'facebook',
  apple_id: 'apple_id',
  apple: 'apple',
  lastgooglelogin: 'lastgooglelogin',
  lastfacebooklogin: 'lastfacebooklogin',
  lastapplelogin: 'lastapplelogin',
  lastnormallogin: 'lastnormallogin',
  lastguestlogin: 'lastguestlogin',
  expiry_date_time: 'expiry_date_time',
  user_defined_id: 'user_defined_id',
  profile_image_url: 'profile_image_url',
  twitter_id: 'twitter_id',
  twitter: 'twitter',
  lasttwitterlogin: 'lasttwitterlogin',
  mobileno: 'mobileno',
  mail_confirmation: 'mail_confirmation',
  mail_confirmation_code: 'mail_confirmation_code'
};

exports.Prisma.Verse_vide_copyright_claimsScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  video_id: 'video_id',
  user_id: 'user_id',
  email: 'email',
  relation: 'relation',
  company: 'company',
  link: 'link',
  publication_date: 'publication_date',
  reason: 'reason',
  description: 'description',
  supporting_evidence: 'supporting_evidence',
  device_type: 'device_type',
  package_name: 'package_name',
  app_name: 'app_name',
  device_id: 'device_id',
  device_name: 'device_name',
  device_model: 'device_model',
  app_version: 'app_version',
  os_version: 'os_version',
  app_type: 'app_type',
  language: 'language',
  country_code: 'country_code',
  is_develop_or_prod: 'is_develop_or_prod',
  app_id: 'app_id',
  checkbox1: 'checkbox1',
  checkbox2: 'checkbox2',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Verse_videosScalarFieldEnum = {
  id: 'id',
  version_id: 'version_id',
  book_id: 'book_id',
  book_num: 'book_num',
  chapter_id: 'chapter_id',
  auto_thumbnail: 'auto_thumbnail',
  videothumbuploadtype: 'videothumbuploadtype',
  video_thumbimage: 'video_thumbimage',
  video_url: 'video_url',
  videoDuration: 'videoDuration',
  videouploadtype: 'videouploadtype',
  video_name: 'video_name',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.VersedaysScalarFieldEnum = {
  book_num: 'book_num',
  chapter_num: 'chapter_num',
  verse_num: 'verse_num',
  catagory_name: 'catagory_name',
  updated_at: 'updated_at',
  created_at: 'created_at',
  id: 'id',
  date: 'date'
};

exports.Prisma.VerseofthedaysScalarFieldEnum = {
  Category_Id: 'Category_Id',
  Book: 'Book',
  Book_Id: 'Book_Id',
  Chapter: 'Chapter',
  Verse: 'Verse',
  Category_Name: 'Category_Name',
  id: 'id'
};

exports.Prisma.VersionsScalarFieldEnum = {
  id: 'id',
  version_name: 'version_name',
  metakeywords: 'metakeywords',
  metadescription: 'metadescription',
  createdby: 'createdby',
  updatedby: 'updatedby',
  createdid: 'createdid',
  updatedid: 'updatedid',
  status: 'status',
  updated_at: 'updated_at',
  created_at: 'created_at',
  uploadnotprocess: 'uploadnotprocess',
  uploadedid: 'uploadedid',
  nooftimesupdated: 'nooftimesupdated',
  version_num: 'version_num',
  lang: 'lang',
  lang_id: 'lang_id',
  audiotype: 'audiotype',
  alignment: 'alignment'
};

exports.Prisma.Video_app_listsScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_description: 'app_description',
  app_image: 'app_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Video_category_listsScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_name_2: 'category_name_2',
  category_description: 'category_description',
  category_image: 'category_image',
  image_type: 'image_type',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  image_link: 'image_link'
};

exports.Prisma.Video_mapped_app_categoriesScalarFieldEnum = {
  id: 'id',
  app_id: 'app_id',
  category_id: 'category_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Video_sub_category_listsScalarFieldEnum = {
  id: 'id',
  sub_category_name: 'sub_category_name',
  sub_category_description: 'sub_category_description',
  sub_category_image: 'sub_category_image',
  image_type: 'image_type',
  category_id: 'category_id',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  image_link: 'image_link'
};

exports.Prisma.VideosScalarFieldEnum = {
  id: 'id',
  video: 'video',
  copyright: 'copyright',
  video_upload_type: 'video_upload_type',
  video_url: 'video_url',
  video_s3_bucket_url: 'video_s3_bucket_url',
  video_s3_bucket_url_path: 'video_s3_bucket_url_path',
  thumb_image: 'thumb_image',
  thumb_upload_type: 'thumb_upload_type',
  thumb_image_s3_bucket_url: 'thumb_image_s3_bucket_url',
  thumb_image_s3_bucket_url_path: 'thumb_image_s3_bucket_url_path',
  category_id: 'category_id',
  sub_category_id: 'sub_category_id',
  admin_id: 'admin_id',
  video_duration: 'video_duration',
  video_watched_count: 'video_watched_count',
  video_report_count: 'video_report_count',
  report_status: 'report_status',
  is_active: 'is_active',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  video_link: 'video_link',
  image_link: 'image_link'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.products_product_type = exports.$Enums.products_product_type = {
  mom: 'mom',
  baby: 'baby'
};

exports.Prisma.ModelName = {
  admins: 'admins',
  apps: 'apps',
  background_music: 'background_music',
  background_music_apps: 'background_music_apps',
  background_music_copyright_claims: 'background_music_copyright_claims',
  banner_app_lists: 'banner_app_lists',
  banner_category_lists: 'banner_category_lists',
  banner_image_types: 'banner_image_types',
  banner_images: 'banner_images',
  banner_mapped_app_categories: 'banner_mapped_app_categories',
  bible_feelings: 'bible_feelings',
  bible_praises: 'bible_praises',
  bible_praises_apps: 'bible_praises_apps',
  bible_praises_categories: 'bible_praises_categories',
  bible_praises_mapped_apps: 'bible_praises_mapped_apps',
  bible_verse_reports: 'bible_verse_reports',
  books: 'books',
  bulk_video_uploads: 'bulk_video_uploads',
  calcs: 'calcs',
  calendar_app_lists: 'calendar_app_lists',
  calendar_category_lists: 'calendar_category_lists',
  calendar_mapped_app_categories: 'calendar_mapped_app_categories',
  calendars: 'calendars',
  calendernotes: 'calendernotes',
  chapters: 'chapters',
  churches: 'churches',
  churchtypes: 'churchtypes',
  cities: 'cities',
  city: 'city',
  contacts: 'contacts',
  couns: 'couns',
  countries: 'countries',
  country: 'country',
  country_products: 'country_products',
  d_survey_resp_10_1: 'd_survey_resp_10_1',
  d_survey_resp_11_1: 'd_survey_resp_11_1',
  d_survey_resp_12_1: 'd_survey_resp_12_1',
  d_survey_resp_13_1: 'd_survey_resp_13_1',
  d_survey_resp_14_1: 'd_survey_resp_14_1',
  d_survey_resp_15_1: 'd_survey_resp_15_1',
  d_survey_resp_16_1: 'd_survey_resp_16_1',
  d_survey_resp_17_1: 'd_survey_resp_17_1',
  d_survey_resp_18_1: 'd_survey_resp_18_1',
  d_survey_resp_19_1: 'd_survey_resp_19_1',
  d_survey_resp_1_1: 'd_survey_resp_1_1',
  d_survey_resp_20_1: 'd_survey_resp_20_1',
  d_survey_resp_21_1: 'd_survey_resp_21_1',
  d_survey_resp_22_1: 'd_survey_resp_22_1',
  d_survey_resp_23_1: 'd_survey_resp_23_1',
  d_survey_resp_24_1: 'd_survey_resp_24_1',
  d_survey_resp_2_1: 'd_survey_resp_2_1',
  d_survey_resp_3_1: 'd_survey_resp_3_1',
  d_survey_resp_8_1: 'd_survey_resp_8_1',
  d_survey_resp_ans_10_2: 'd_survey_resp_ans_10_2',
  d_survey_resp_ans_11_2: 'd_survey_resp_ans_11_2',
  d_survey_resp_ans_12_2: 'd_survey_resp_ans_12_2',
  d_survey_resp_ans_13_2: 'd_survey_resp_ans_13_2',
  d_survey_resp_ans_15_2: 'd_survey_resp_ans_15_2',
  d_survey_resp_ans_16_2: 'd_survey_resp_ans_16_2',
  d_survey_resp_ans_17_2: 'd_survey_resp_ans_17_2',
  d_survey_resp_ans_18_2: 'd_survey_resp_ans_18_2',
  d_survey_resp_ans_19_2: 'd_survey_resp_ans_19_2',
  d_survey_resp_ans_1_2: 'd_survey_resp_ans_1_2',
  d_survey_resp_ans_20_2: 'd_survey_resp_ans_20_2',
  d_survey_resp_ans_21_2: 'd_survey_resp_ans_21_2',
  d_survey_resp_ans_22_2: 'd_survey_resp_ans_22_2',
  d_survey_resp_ans_23_2: 'd_survey_resp_ans_23_2',
  d_survey_resp_ans_24_2: 'd_survey_resp_ans_24_2',
  d_survey_resp_ans_2_2: 'd_survey_resp_ans_2_2',
  d_survey_resp_ans_3_2: 'd_survey_resp_ans_3_2',
  d_survey_resp_ans_8_2: 'd_survey_resp_ans_8_2',
  daily_verses: 'daily_verses',
  device_name_lists: 'device_name_lists',
  districts: 'districts',
  event_app_lists: 'event_app_lists',
  event_category_lists: 'event_category_lists',
  event_mapped_app_categories: 'event_mapped_app_categories',
  event_sub_categories: 'event_sub_categories',
  events: 'events',
  events_modules: 'events_modules',
  example_table: 'example_table',
  fm_radios: 'fm_radios',
  form_multiple_uploads: 'form_multiple_uploads',
  fornavigates: 'fornavigates',
  image_app_lists: 'image_app_lists',
  image_category_lists: 'image_category_lists',
  image_mapped_app_categories: 'image_mapped_app_categories',
  image_server_infos: 'image_server_infos',
  image_sub_category_lists: 'image_sub_category_lists',
  image_trending_lists: 'image_trending_lists',
  image_uploads: 'image_uploads',
  images: 'images',
  langs: 'langs',
  languages: 'languages',
  log_activities: 'log_activities',
  metas: 'metas',
  migrations: 'migrations',
  miracle_prayer_apps: 'miracle_prayer_apps',
  miracle_prayers: 'miracle_prayers',
  modules: 'modules',
  notifies: 'notifies',
  popular_verse_apps: 'popular_verse_apps',
  popular_verse_categories: 'popular_verse_categories',
  popular_verse_mapped_apps: 'popular_verse_mapped_apps',
  popular_verses: 'popular_verses',
  prayer_app_lists: 'prayer_app_lists',
  prayer_category_lists: 'prayer_category_lists',
  prayer_mapped_app_categories: 'prayer_mapped_app_categories',
  prayers: 'prayers',
  product_app_lists: 'product_app_lists',
  product_categories: 'product_categories',
  products: 'products',
  quotes: 'quotes',
  quotes_app_lists: 'quotes_app_lists',
  quotes_category_lists: 'quotes_category_lists',
  quotes_mapped_app_categories: 'quotes_mapped_app_categories',
  quotes_sub_category_lists: 'quotes_sub_category_lists',
  record0: 'record0',
  record100: 'record100',
  record101: 'record101',
  record102: 'record102',
  record103: 'record103',
  record104: 'record104',
  record105: 'record105',
  record106: 'record106',
  record107: 'record107',
  record108: 'record108',
  record109: 'record109',
  record11: 'record11',
  record110: 'record110',
  record111: 'record111',
  record112: 'record112',
  record113: 'record113',
  record114: 'record114',
  record115: 'record115',
  record116: 'record116',
  record117: 'record117',
  record118: 'record118',
  record119: 'record119',
  record12: 'record12',
  record120: 'record120',
  record121: 'record121',
  record122: 'record122',
  record123: 'record123',
  record124: 'record124',
  record125: 'record125',
  record126: 'record126',
  record127: 'record127',
  record128: 'record128',
  record129: 'record129',
  record13: 'record13',
  record130: 'record130',
  record131: 'record131',
  record132: 'record132',
  record133: 'record133',
  record134: 'record134',
  record135: 'record135',
  record136: 'record136',
  record137: 'record137',
  record138: 'record138',
  record139: 'record139',
  record14: 'record14',
  record140: 'record140',
  record141: 'record141',
  record142: 'record142',
  record143: 'record143',
  record144: 'record144',
  record145: 'record145',
  record146: 'record146',
  record147: 'record147',
  record148: 'record148',
  record149: 'record149',
  record15: 'record15',
  record150: 'record150',
  record151: 'record151',
  record152: 'record152',
  record153: 'record153',
  record154: 'record154',
  record155: 'record155',
  record156: 'record156',
  record157: 'record157',
  record158: 'record158',
  record159: 'record159',
  record16: 'record16',
  record160: 'record160',
  record161: 'record161',
  record162: 'record162',
  record163: 'record163',
  record164: 'record164',
  record165: 'record165',
  record166: 'record166',
  record167: 'record167',
  record168: 'record168',
  record169: 'record169',
  record17: 'record17',
  record170: 'record170',
  record171: 'record171',
  record172: 'record172',
  record173: 'record173',
  record174: 'record174',
  record175: 'record175',
  record176: 'record176',
  record177: 'record177',
  record178: 'record178',
  record179: 'record179',
  record18: 'record18',
  record180: 'record180',
  record181: 'record181',
  record182: 'record182',
  record183: 'record183',
  record184: 'record184',
  record185: 'record185',
  record186: 'record186',
  record187: 'record187',
  record188: 'record188',
  record189: 'record189',
  record19: 'record19',
  record190: 'record190',
  record191: 'record191',
  record192: 'record192',
  record193: 'record193',
  record194: 'record194',
  record195: 'record195',
  record196: 'record196',
  record197: 'record197',
  record198: 'record198',
  record199: 'record199',
  record2: 'record2',
  record20: 'record20',
  record200: 'record200',
  record201: 'record201',
  record202: 'record202',
  record203: 'record203',
  record204: 'record204',
  record205: 'record205',
  record206: 'record206',
  record207: 'record207',
  record208: 'record208',
  record209: 'record209',
  record21: 'record21',
  record210: 'record210',
  record211: 'record211',
  record212: 'record212',
  record213: 'record213',
  record214: 'record214',
  record215: 'record215',
  record216: 'record216',
  record217: 'record217',
  record218: 'record218',
  record219: 'record219',
  record22: 'record22',
  record220: 'record220',
  record221: 'record221',
  record222: 'record222',
  record223: 'record223',
  record224: 'record224',
  record225: 'record225',
  record226: 'record226',
  record227: 'record227',
  record228: 'record228',
  record229: 'record229',
  record23: 'record23',
  record230: 'record230',
  record231: 'record231',
  record232: 'record232',
  record233: 'record233',
  record234: 'record234',
  record235: 'record235',
  record236: 'record236',
  record237: 'record237',
  record238: 'record238',
  record239: 'record239',
  record24: 'record24',
  record240: 'record240',
  record241: 'record241',
  record242: 'record242',
  record243: 'record243',
  record244: 'record244',
  record245: 'record245',
  record246: 'record246',
  record247: 'record247',
  record248: 'record248',
  record249: 'record249',
  record25: 'record25',
  record250: 'record250',
  record251: 'record251',
  record252: 'record252',
  record253: 'record253',
  record254: 'record254',
  record255: 'record255',
  record256: 'record256',
  record257: 'record257',
  record258: 'record258',
  record259: 'record259',
  record26: 'record26',
  record260: 'record260',
  record261: 'record261',
  record262: 'record262',
  record263: 'record263',
  record264: 'record264',
  record265: 'record265',
  record266: 'record266',
  record267: 'record267',
  record268: 'record268',
  record269: 'record269',
  record27: 'record27',
  record270: 'record270',
  record271: 'record271',
  record272: 'record272',
  record273: 'record273',
  record274: 'record274',
  record275: 'record275',
  record276: 'record276',
  record277: 'record277',
  record278: 'record278',
  record279: 'record279',
  record28: 'record28',
  record280: 'record280',
  record281: 'record281',
  record282: 'record282',
  record283: 'record283',
  record284: 'record284',
  record285: 'record285',
  record286: 'record286',
  record287: 'record287',
  record288: 'record288',
  record289: 'record289',
  record29: 'record29',
  record290: 'record290',
  record291: 'record291',
  record292: 'record292',
  record293: 'record293',
  record294: 'record294',
  record295: 'record295',
  record296: 'record296',
  record297: 'record297',
  record298: 'record298',
  record299: 'record299',
  record3: 'record3',
  record30: 'record30',
  record300: 'record300',
  record301: 'record301',
  record302: 'record302',
  record303: 'record303',
  record304: 'record304',
  record305: 'record305',
  record306: 'record306',
  record307: 'record307',
  record308: 'record308',
  record309: 'record309',
  record31: 'record31',
  record310: 'record310',
  record311: 'record311',
  record312: 'record312',
  record313: 'record313',
  record32: 'record32',
  record33: 'record33',
  record34: 'record34',
  record35: 'record35',
  record36: 'record36',
  record37: 'record37',
  record38: 'record38',
  record39: 'record39',
  record4: 'record4',
  record40: 'record40',
  record41: 'record41',
  record42: 'record42',
  record43: 'record43',
  record44: 'record44',
  record45: 'record45',
  record46: 'record46',
  record47: 'record47',
  record48: 'record48',
  record49: 'record49',
  record50: 'record50',
  record51: 'record51',
  record52: 'record52',
  record53: 'record53',
  record54: 'record54',
  record55: 'record55',
  record56: 'record56',
  record57: 'record57',
  record58: 'record58',
  record59: 'record59',
  record6: 'record6',
  record60: 'record60',
  record61: 'record61',
  record62: 'record62',
  record63: 'record63',
  record64: 'record64',
  record65: 'record65',
  record66: 'record66',
  record67: 'record67',
  record68: 'record68',
  record69: 'record69',
  record70: 'record70',
  record71: 'record71',
  record72: 'record72',
  record73: 'record73',
  record74: 'record74',
  record75: 'record75',
  record76: 'record76',
  record77: 'record77',
  record78: 'record78',
  record79: 'record79',
  record80: 'record80',
  record81: 'record81',
  record82: 'record82',
  record83: 'record83',
  record84: 'record84',
  record85: 'record85',
  record86: 'record86',
  record87: 'record87',
  record88: 'record88',
  record89: 'record89',
  record90: 'record90',
  record91: 'record91',
  record92: 'record92',
  record93: 'record93',
  record94: 'record94',
  record95: 'record95',
  record96: 'record96',
  record97: 'record97',
  record98: 'record98',
  record99: 'record99',
  region: 'region',
  report_images: 'report_images',
  report_videos: 'report_videos',
  states: 'states',
  status_amens: 'status_amens',
  survey_questions: 'survey_questions',
  surveys: 'surveys',
  tempdatas: 'tempdatas',
  uploadrecords: 'uploadrecords',
  uploadversions: 'uploadversions',
  usergets: 'usergets',
  users: 'users',
  verse_vide_copyright_claims: 'verse_vide_copyright_claims',
  verse_videos: 'verse_videos',
  versedays: 'versedays',
  verseofthedays: 'verseofthedays',
  versions: 'versions',
  video_app_lists: 'video_app_lists',
  video_category_lists: 'video_category_lists',
  video_mapped_app_categories: 'video_mapped_app_categories',
  video_sub_category_lists: 'video_sub_category_lists',
  videos: 'videos'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
