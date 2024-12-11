import https from 'https';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse request body
    const { email, amount } = body;

    if (!email || !amount) {
      return new Response(
        JSON.stringify({ error: 'Email and amount are required' }),
        { status: 400 }
      );
    }

    const params = JSON.stringify({
      email,
      amount,
    });

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Use environment variable
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      const paystackReq = https.request(options, (paystackRes) => {
        let data = '';

        paystackRes.on('data', (chunk) => {
          data += chunk;
        });

        paystackRes.on('end', () => {
          resolve(
            new Response(data, {
              status: paystackRes.statusCode,
              headers: { 'Content-Type': 'application/json' },
            })
          );
        });
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      paystackReq.on('error', (error) => {
        reject(
          new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
          })
        );
      });

      paystackReq.write(params);
      paystackReq.end();
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Unexpected error occurred' }),
      { status: 500 }
    );
  }
}
