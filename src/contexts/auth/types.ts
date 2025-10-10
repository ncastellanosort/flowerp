export type UserData = {
  email: string,
  token: string,
}

export type AuthContextType = {
  user: UserData | null,
  setUser: (user: UserData | null) => void 
}
