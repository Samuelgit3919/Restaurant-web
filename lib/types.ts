export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  dietary?: string[]
}

export interface MenuSection {
  id: string
  title: string
  items: MenuItem[]
}

export interface ReservationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  partySize: number
  occasion: string
  specialRequests: string
}
