interface AddressData {
  country: string,
  city: string,
  address: string,
}

export interface RegistrationRequest {
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phoneNumber?: string,
  money?: Number,
  addressData?: AddressData | {}
}
