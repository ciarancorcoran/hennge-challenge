export interface IEmail {
  id: number
  from: string
  to: string[]
  subject: string
  email_body: string
  date: Date
  attachment: string
  [key: string]: string | string[] | Date | number
}