import { listen } from '../backend/server';
const port = process.env.PORT || 3000;

listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
