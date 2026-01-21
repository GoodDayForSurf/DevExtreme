const baseUrl = (process.env.SSR_APP_URL || 'http://localhost:4200/')
  .replace(/\/?$/, '/');

fixture('SSR app markup');

test('should render widget markup on the server', async (t) => {
  const response = await t.request({
    url: baseUrl,
    method: 'GET',
  });

  console.log('-----response----->', response);
  await t.expect(response.status).eql(200);

  const html = response.body || '';
  await t.expect(html).contains('<dx-accordion');
  await t.expect(html).contains('<dx-data-grid');
});
