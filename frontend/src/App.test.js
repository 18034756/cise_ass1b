import { render, screen } from '@testing-library/react';
import App from './App';
// import testApi from './testApi.test'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Software /i);
  expect(linkElement).toBeInTheDocument();
});




// it('api testing', async () => {
//   const res = new testApi();
//   console.log(await res.api())
//   let data = await res.api()
//   console.log(data)
//   // expect(data)
//   expect(data).toHaveLength(2)
// })


// describe("api testing", async () => {
  
  // it("should get sample json", async () => {
  //   const res = new testApi();
  //   const response = await  res.api();
  //   expect(response.status).toBe(200);
  // });
// });