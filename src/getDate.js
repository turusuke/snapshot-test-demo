export default function getDate() {
  return {
    date: new Date(),
    id: Math.floor(Math.random() * 100),
    code: 123
  }
}