import express from 'express';

const routes = express.Router();

routes.post('/test-kafka', async (req, res) => {
		// Chamar microservice
    await req.producer.send({
			topic: 'test',
			messages: [
				{ value: 'Hello KafkaJS user!' },
			],
		});

    return res.json({ ok: true });
});

export default routes;
