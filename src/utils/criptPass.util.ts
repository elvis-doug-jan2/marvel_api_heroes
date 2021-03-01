import * as crypto from 'crypto'

const encryption = {
  iv: process.env.ENCRYPTION_IV,
  key: process.env.ENCRYPTION_KEY,
}

export function encrypt(password: string): string {
  const iv = hexStringToByte(encryption.iv.toString())
  const cipher = crypto.createCipheriv('aes-256-cbc', encryption.key, iv)

  let encrypted = cipher.update(password, 'utf8')
  encrypted = Buffer.concat([encrypted, cipher.final()])

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

export function decrypt(text: string): string {
  const textParts = text.split(':')
  const iv = Buffer.from(textParts.shift(), 'hex')
  const encryptedText = Buffer.from(textParts.join(':'), 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryption.key), iv)

  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

function hexStringToByte(str) {
  return Buffer.from(str, 'utf8')
}
