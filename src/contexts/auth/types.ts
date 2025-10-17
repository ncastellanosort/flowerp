export type UserData = {
  email: string,
  token: string,
}
export type Company = {
  insertedAt: Date,
  updatedAt: Date,
  id: number,
  taxId: string,
  name: string,
  address: string,
  contact: string,
  email: string,
  hashedPassword: string,
  isActive: boolean,
}


export type AuthContextType = {
  company: Company | null,
  setCompany: (company: Company | null) => void ,
  loading: boolean
}
