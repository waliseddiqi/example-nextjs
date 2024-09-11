import { promises as fs } from 'fs';
import path from 'path';


export async function POST(req) {
  try {
    // Get the request body
    const data = await req.json();

    // Define the file path where the data will be saved
    const filePath = path.join(process.cwd(), 'data', 'output.txt');

    // Create the 'data' directory if it doesn't exist
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Append the data to the file (instead of overwriting)
    const formattedData = JSON.stringify(data, null, 2) + '\n';  // Adding a newline for better readability
    await fs.appendFile(filePath, formattedData);

    // Respond with success
    return new Response(JSON.stringify({ message: 'Data appended successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return new Response(JSON.stringify({ message: 'Failed to save data' }), { status: 500 });
  }
}

