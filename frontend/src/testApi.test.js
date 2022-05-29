class testApi{
   api(){
       return fetch('http://localhost:8082/api/articles')
       .then((data)=>{
           return data.json()
       })
   }
}


export default testApi



it('api testing', async () => {
  const res = new testApi();
  console.log(await res.api())
  let data = await res.api()
  console.log(data)
  // expect(data)
  expect(data).toHaveLength(2)
})
