export default function getMembersProfile(targetName) {
  return [
    {
      name: 'taro',
      age: 41
    },
    {
      name: 'hanako',
      age: 32
    },
    {
      name: 'jiro',
      age: 21
    }
  ].filter(({name}) => targetName ? targetName === name : true)
}
