import express, { Request, Response } from 'express';

const router = express.Router();

// Define the POST route for the webhook
router.post('/whatsapp-webhook', async (req: Request, res: Response) => {
  try {
    const { Body, From } = req.body;

    // Handle the incoming message
    if (Body.toLowerCase().includes('products')) {
      // Example response
      res.send(`
        <Response>
          <Message>Here are our products: ...</Message>
        </Response>
      `);
    } else {
      res.send(`
        <Response>
          <Message>Send 'Products' to see our product list.</Message>
        </Response>
      `);
    }
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
