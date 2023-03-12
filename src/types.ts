export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  _FieldSet: any;
};

export type Address = {
  __typename?: 'Address';
  content?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type AvailabilityCancellationPolicies = {
  __typename?: 'AvailabilityCancellationPolicies';
  amount?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type AvailabilityData = {
  __typename?: 'AvailabilityData';
  availability: Array<AvailabilityHotels>;
};

export type AvailabilityFilterInput = {
  maxHotels?: InputMaybe<Scalars['Int']>;
  maxRate?: InputMaybe<Scalars['Int']>;
  maxRatesPerRoom?: InputMaybe<Scalars['Int']>;
  maxRooms?: InputMaybe<Scalars['Int']>;
  minRate?: InputMaybe<Scalars['Int']>;
};

export type AvailabilityHotelInput = {
  hotel: Array<Scalars['Int']>;
};

export type AvailabilityHotels = {
  __typename?: 'AvailabilityHotels';
  categoryCode?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  destinationCode?: Maybe<Scalars['String']>;
  destinationName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  maxRate?: Maybe<Scalars['String']>;
  minRate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<AvailabilityRooms>>>;
  zoneCode?: Maybe<Scalars['Int']>;
  zoneName?: Maybe<Scalars['String']>;
};

export type AvailabilityInput = {
  filter?: InputMaybe<AvailabilityFilterInput>;
  hotels: AvailabilityHotelInput;
  language: LanguageEnum;
  occupancies: Array<AvailabilityOccupanciesInput>;
  stay: AvailabilityStayInput;
};

export type AvailabilityOccupanciesInput = {
  adults: Scalars['Int'];
  children: Scalars['Int'];
  rooms: Scalars['Int'];
};

export type AvailabilityRates = {
  __typename?: 'AvailabilityRates';
  adults?: Maybe<Scalars['Int']>;
  allotment?: Maybe<Scalars['Int']>;
  boardCode?: Maybe<Scalars['String']>;
  boardName?: Maybe<Scalars['String']>;
  cancellationPolicies?: Maybe<Array<Maybe<AvailabilityCancellationPolicies>>>;
  children?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
  discountPCT?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['String']>;
  packaging?: Maybe<Scalars['Boolean']>;
  paymentType?: Maybe<Scalars['String']>;
  rateClass?: Maybe<Scalars['String']>;
  rateKey?: Maybe<Scalars['String']>;
  rateType?: Maybe<Scalars['String']>;
  rooms?: Maybe<Scalars['Int']>;
  sellingRate?: Maybe<Scalars['String']>;
};

export type AvailabilityRooms = {
  __typename?: 'AvailabilityRooms';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<AvailabilityRates>>>;
};

export type AvailabilityStayInput = {
  checkIn: Scalars['String'];
  checkOut: Scalars['String'];
};

export type B_CancellationPolicies = {
  __typename?: 'B_CancellationPolicies';
  amount?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type B_Holder = {
  __typename?: 'B_Holder';
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type B_Hotel = {
  __typename?: 'B_Hotel';
  cancellationAmount?: Maybe<Scalars['Int']>;
  categoryCode?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  checkIn?: Maybe<Scalars['String']>;
  checkOut?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  destinationCode?: Maybe<Scalars['String']>;
  destinationName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<B_Rooms>>>;
  supplier?: Maybe<B_Supplier>;
  totalNet?: Maybe<Scalars['String']>;
  totalSellingRate?: Maybe<Scalars['String']>;
  zoneCode?: Maybe<Scalars['Int']>;
  zoneName?: Maybe<Scalars['String']>;
};

export type B_InvoiceCompany = {
  __typename?: 'B_InvoiceCompany';
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
};

export type B_ModificationPolicies = {
  __typename?: 'B_ModificationPolicies';
  cancellation?: Maybe<Scalars['Boolean']>;
  modification?: Maybe<Scalars['Boolean']>;
};

export type B_Paxes = {
  __typename?: 'B_Paxes';
  name?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type B_Rates = {
  __typename?: 'B_Rates';
  adults?: Maybe<Scalars['Int']>;
  boardCode?: Maybe<Scalars['String']>;
  boardName?: Maybe<Scalars['String']>;
  cancellationPolicies?: Maybe<Array<Maybe<B_CancellationPolicies>>>;
  children?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
  discountPCT?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['String']>;
  packaging?: Maybe<Scalars['Boolean']>;
  paymentType?: Maybe<Scalars['String']>;
  rateClass?: Maybe<Scalars['String']>;
  rateComments?: Maybe<Scalars['String']>;
  rooms?: Maybe<Scalars['Int']>;
  sellingRate?: Maybe<Scalars['String']>;
};

export type B_Rooms = {
  __typename?: 'B_Rooms';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  paxes?: Maybe<Array<Maybe<B_Paxes>>>;
  rates?: Maybe<Array<Maybe<B_Rates>>>;
  status?: Maybe<Scalars['String']>;
};

export type B_Supplier = {
  __typename?: 'B_Supplier';
  name?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
};

export type Booking = {
  __typename?: 'Booking';
  cancellationReference?: Maybe<Scalars['String']>;
  clientReference?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['String']>;
  creationUser?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  holder?: Maybe<B_Holder>;
  hotel?: Maybe<B_Hotel>;
  invoiceCompany?: Maybe<B_InvoiceCompany>;
  modificationPolicies?: Maybe<B_ModificationPolicies>;
  pendingAmount?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalNet?: Maybe<Scalars['Int']>;
  totalSellingRate?: Maybe<Scalars['Int']>;
};

export type BookingData = {
  __typename?: 'BookingData';
  data: Array<Booking>;
  pagination: PaginationType;
};

export type BookingInput = {
  clientReference?: InputMaybe<Scalars['String']>;
  language: LanguageEnum;
};

export type BookingsHistoryInput = {
  language: LanguageEnum;
  pagination: PaginationInput;
};

export type CheckRateData = {
  __typename?: 'CheckRateData';
  categoryCode?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  checkIn?: Maybe<Scalars['String']>;
  checkOut?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  destinationCode?: Maybe<Scalars['String']>;
  destinationName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  modificationPolicies?: Maybe<RaModificationPolicies>;
  name?: Maybe<Scalars['String']>;
  paymentDataRequired?: Maybe<Scalars['Boolean']>;
  rooms?: Maybe<Array<Maybe<RaRooms>>>;
  totalNet?: Maybe<Scalars['String']>;
  totalSellingRate?: Maybe<Scalars['String']>;
  zoneCode?: Maybe<Scalars['Int']>;
  zoneName?: Maybe<Scalars['String']>;
};

export type CheckRateInput = {
  language: LanguageEnum;
  rateKey: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  content?: Maybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Description = {
  __typename?: 'Description';
  content?: Maybe<Scalars['String']>;
};

export type Facilities = {
  __typename?: 'Facilities';
  facilityCode?: Maybe<Scalars['Int']>;
  facilityGroupCode?: Maybe<Scalars['Int']>;
  facilityGroupName?: Maybe<Scalars['String']>;
  facilityName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  voucher?: Maybe<Scalars['Boolean']>;
};

export type FacilitiesInput = {
  groupCode: Scalars['Int'];
  language: LanguageEnum;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type GetBookingInput = {
  bookingReference?: InputMaybe<Scalars['String']>;
  language: LanguageEnum;
};

export type GetPaymentInput = {
  orderNumber: Scalars['String'];
};

export type GetPlacesInput = {
  query?: InputMaybe<Scalars['String']>;
};

export type GetPopularInput = {
  language: LanguageEnum;
  pagination: PaginationInput;
};

export type GetTickerInput = {
  language: LanguageEnum;
};

export type GetTickersInput = {
  language: LanguageEnum;
  pagination: PaginationInput;
};

export type Hotel = {
  __typename?: 'Hotel';
  S2C?: Maybe<Scalars['String']>;
  accommodationTypeCode?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  amenityCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  boardCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryCode?: Maybe<Scalars['String']>;
  categoryGroupCode?: Maybe<Scalars['String']>;
  chainCode?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  code?: Maybe<Scalars['Int']>;
  coordinates?: Maybe<Coordinates>;
  countryCode?: Maybe<Scalars['String']>;
  description?: Maybe<Description>;
  destinationCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facilities?: Maybe<Array<Maybe<Facilities>>>;
  hotelCity?: Maybe<Scalars['String']>;
  hotelName?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Images>>>;
  interestPoints?: Maybe<Array<Maybe<InterestPoints>>>;
  issues?: Maybe<Array<Maybe<Issues>>>;
  language: LanguageEnum;
  lastUpdate?: Maybe<Scalars['String']>;
  name?: Maybe<Name>;
  phones?: Maybe<Array<Maybe<Phones>>>;
  postalCode?: Maybe<Scalars['String']>;
  queryBy?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  segmentCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stateCode?: Maybe<Scalars['String']>;
  type: HotelTypeEnum;
  web?: Maybe<Scalars['String']>;
  zoneCode?: Maybe<Scalars['Int']>;
};


export type HotelFacilitiesArgs = {
  input?: InputMaybe<FacilitiesInput>;
};


export type HotelImagesArgs = {
  input?: InputMaybe<ImagesInput>;
};


export type HotelInterestPointsArgs = {
  input?: InputMaybe<HotelInterestPointsInput>;
};


export type HotelIssuesArgs = {
  input?: InputMaybe<HotelIssuesInput>;
};


export type HotelPhonesArgs = {
  input?: InputMaybe<HotelPhonesInput>;
};


export type HotelRoomsArgs = {
  input?: InputMaybe<HotelRoomsInput>;
};

export type HotelInput = {
  code: Scalars['Int'];
  language: LanguageEnum;
};

export type HotelInterestPointsInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type HotelIssuesInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type HotelPhonesInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type HotelRoomsInput = {
  language: LanguageEnum;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  roomCode?: InputMaybe<Array<Scalars['String']>>;
};

export enum HotelTypeEnum {
  Cg = 'CG',
  De = 'DE',
  Hb = 'HB'
}

export type HotelsData = {
  __typename?: 'HotelsData';
  hotels: Array<Hotel>;
  pagination: PaginationType;
};

export type HotelsGeolocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  radius: Scalars['Int'];
};

export type HotelsInput = {
  geolocation?: InputMaybe<HotelsGeolocationInput>;
  keywords?: InputMaybe<HotelsKeywordsInput>;
  language: LanguageEnum;
  occupancies?: InputMaybe<HotelsOccupanciesInput>;
  pagination: PaginationInput;
};

export type HotelsKeywordsInput = {
  cities?: InputMaybe<Array<Scalars['String']>>;
  keyword: Array<Scalars['String']>;
};

export type HotelsOccupanciesInput = {
  adults: Scalars['Int'];
  children: Scalars['Int'];
  rooms: Scalars['Int'];
};

export type HotelsStayInput = {
  checkIn: Scalars['String'];
  checkOut: Scalars['String'];
};

export type Images = {
  __typename?: 'Images';
  imageTypeCode?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  visualOrder?: Maybe<Scalars['Int']>;
};

export type ImagesInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  typeCode: Scalars['String'];
};

export type InterestPoints = {
  __typename?: 'InterestPoints';
  distance?: Maybe<Scalars['String']>;
  facilityCode?: Maybe<Scalars['Int']>;
  facilityGroupCode?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  poiName?: Maybe<Scalars['String']>;
};

export type Issues = {
  __typename?: 'Issues';
  alternative?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
  issueCode?: Maybe<Scalars['String']>;
  issueType?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  queryBy?: Maybe<Scalars['String']>;
  radius: Scalars['Int'];
};

export type KeywordData = {
  __typename?: 'KeywordData';
  keyword: Array<Keyword>;
};

export type KeywordInput = {
  keyword: Array<Scalars['String']>;
  language: LanguageEnum;
};

export enum LanguageEnum {
  Eng = 'ENG',
  Tai = 'TAI'
}

export type MemberRegisterData = {
  __typename?: 'MemberRegisterData';
  message: Scalars['String'];
};

export type MemberRegisterInput = {
  display: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemberVerifyEmailData = {
  __typename?: 'MemberVerifyEmailData';
  message: Scalars['String'];
};

export type MemberVerifyEmailInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Ticker: Ticker;
  booking: Booking;
  memberRegister: MemberRegisterData;
  memberVerify: MemberVerifyEmailData;
  payment: PaymentData;
};


export type MutationTickerArgs = {
  input: TickerInput;
};


export type MutationBookingArgs = {
  input: BookingInput;
};


export type MutationMemberRegisterArgs = {
  input: MemberRegisterInput;
};


export type MutationMemberVerifyArgs = {
  input: MemberVerifyEmailInput;
};


export type MutationPaymentArgs = {
  input: PaymentInput;
};

export type Name = {
  __typename?: 'Name';
  content?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type PaginationType = {
  __typename?: 'PaginationType';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaymentData = {
  __typename?: 'PaymentData';
  orderNumber: Scalars['String'];
  paymentUrl: Scalars['String'];
  qrImage: Scalars['String'];
};

export type PaymentInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  rateKey: Scalars['String'];
  surname: Scalars['String'];
};

export type Phones = {
  __typename?: 'Phones';
  phoneNumber?: Maybe<Scalars['String']>;
  phoneType?: Maybe<Scalars['String']>;
};

export type Places = {
  __typename?: 'Places';
  description: Scalars['String'];
  placeId: Scalars['String'];
};

export type PlacesData = {
  __typename?: 'PlacesData';
  places?: Maybe<Array<Maybe<Places>>>;
};

export type Popular = {
  __typename?: 'Popular';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PopularData = {
  __typename?: 'PopularData';
  data: Array<Popular>;
  pagination: PaginationType;
};

export type PromotionData = {
  __typename?: 'PromotionData';
  createdAt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PromotionInput = {
  language: LanguageEnum;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  checkRate: CheckRateData;
  getAllPopular: PopularData;
  getAvailability: AvailabilityData;
  getBooking: Booking;
  getBookingsHistory: BookingData;
  getHotel: Hotel;
  getHotels: HotelsData;
  getKeyword: KeywordData;
  getPayment: PaymentData;
  getPlaces: PlacesData;
  getPopular: Popular;
  getPromotion: PromotionData;
  getSubscription: SubscriptionData;
  getTicker: Ticker;
  getTickers: TickerData;
};


export type QueryCheckRateArgs = {
  input: CheckRateInput;
};


export type QueryGetAllPopularArgs = {
  input: GetPopularInput;
};


export type QueryGetAvailabilityArgs = {
  input: AvailabilityInput;
};


export type QueryGetBookingArgs = {
  input: GetBookingInput;
};


export type QueryGetBookingsHistoryArgs = {
  input: BookingsHistoryInput;
};


export type QueryGetHotelArgs = {
  input: HotelInput;
};


export type QueryGetHotelsArgs = {
  input: HotelsInput;
};


export type QueryGetKeywordArgs = {
  input: KeywordInput;
};


export type QueryGetPaymentArgs = {
  input: GetPaymentInput;
};


export type QueryGetPlacesArgs = {
  input: GetPlacesInput;
};


export type QueryGetPopularArgs = {
  input: GetPopularInput;
};


export type QueryGetPromotionArgs = {
  input: PromotionInput;
};


export type QueryGetSubscriptionArgs = {
  input: SubscriptionInput;
};


export type QueryGetTickerArgs = {
  input: GetTickerInput;
};


export type QueryGetTickersArgs = {
  input: GetTickersInput;
};

export type RaCancellationPolicies = {
  __typename?: 'RaCancellationPolicies';
  amount?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type RaModificationPolicies = {
  __typename?: 'RaModificationPolicies';
  cancellation?: Maybe<Scalars['Boolean']>;
  modification?: Maybe<Scalars['Boolean']>;
};

export type RaOffers = {
  __typename?: 'RaOffers';
  amount?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RaRateBreakDown = {
  __typename?: 'RaRateBreakDown';
  rateDiscounts?: Maybe<Array<Maybe<RaRateDiscounts>>>;
};

export type RaRateDiscounts = {
  __typename?: 'RaRateDiscounts';
  amount?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RaRates = {
  __typename?: 'RaRates';
  adults?: Maybe<Scalars['Int']>;
  allotment?: Maybe<Scalars['Int']>;
  boardCode?: Maybe<Scalars['String']>;
  boardName?: Maybe<Scalars['String']>;
  cancellationPolicies?: Maybe<Array<Maybe<RaCancellationPolicies>>>;
  children?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
  discountPCT?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['String']>;
  offers?: Maybe<Array<Maybe<RaOffers>>>;
  packaging?: Maybe<Scalars['Boolean']>;
  paymentType?: Maybe<Scalars['String']>;
  rateBreakDown?: Maybe<RaRateBreakDown>;
  rateClass?: Maybe<Scalars['String']>;
  rateComments?: Maybe<Scalars['String']>;
  rateKey?: Maybe<Scalars['String']>;
  rateType?: Maybe<Scalars['String']>;
  rooms?: Maybe<Scalars['Int']>;
  sellingRate?: Maybe<Scalars['String']>;
};

export type RaRooms = {
  __typename?: 'RaRooms';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<RaRates>>>;
};

export type RoomFacilities = {
  __typename?: 'RoomFacilities';
  facilityCode?: Maybe<Scalars['Int']>;
  facilityGroupCode?: Maybe<Scalars['Int']>;
  facilityGroupName?: Maybe<Scalars['String']>;
  facilityName?: Maybe<Scalars['String']>;
  indLogic?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  voucher?: Maybe<Scalars['Boolean']>;
};

export type RoomStayFacilities = {
  __typename?: 'RoomStayFacilities';
  facilityCode?: Maybe<Scalars['Int']>;
  facilityGroupCode?: Maybe<Scalars['Int']>;
  facilityGroupName?: Maybe<Scalars['String']>;
  facilityName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type RoomStays = {
  __typename?: 'RoomStays';
  description?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  roomStayFacilities?: Maybe<Array<Maybe<RoomStayFacilities>>>;
  stayType?: Maybe<Scalars['String']>;
};

export type Rooms = {
  __typename?: 'Rooms';
  characteristicCode?: Maybe<Scalars['String']>;
  hotelCode?: Maybe<Scalars['Int']>;
  hotelType: HotelTypeEnum;
  isParentRoom?: Maybe<Scalars['Boolean']>;
  maxAdults?: Maybe<Scalars['Int']>;
  maxChildren?: Maybe<Scalars['Int']>;
  maxPax?: Maybe<Scalars['Int']>;
  minAdults?: Maybe<Scalars['Int']>;
  minPax?: Maybe<Scalars['Int']>;
  roomCode?: Maybe<Scalars['String']>;
  roomFacilities?: Maybe<Array<Maybe<RoomFacilities>>>;
  roomImages?: Maybe<Array<Maybe<Images>>>;
  roomStays?: Maybe<Array<Maybe<RoomStays>>>;
  roomType?: Maybe<Scalars['String']>;
};


export type RoomsRoomFacilitiesArgs = {
  input?: InputMaybe<FacilitiesInput>;
};


export type RoomsRoomImagesArgs = {
  input?: InputMaybe<ImagesInput>;
};


export type RoomsRoomStaysArgs = {
  input?: InputMaybe<StaysInput>;
};

export type StaysInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type SubscriptionData = {
  __typename?: 'SubscriptionData';
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['String']>;
  primaryEmail?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SubscriptionInput = {
  language: LanguageEnum;
};

export type Ticker = {
  __typename?: 'Ticker';
  count: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TickerData = {
  __typename?: 'TickerData';
  data: Array<Ticker>;
  pagination: PaginationType;
};

export type TickerInput = {
  billImage?: InputMaybe<Scalars['String']>;
  clientReference?: InputMaybe<Scalars['String']>;
  creationDate?: InputMaybe<Scalars['String']>;
  creationUser?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  pendingAmount?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  remark?: InputMaybe<Scalars['String']>;
  totalNet?: InputMaybe<Scalars['String']>;
  totalSellingRate?: InputMaybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};
