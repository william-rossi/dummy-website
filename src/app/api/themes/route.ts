import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const pastaDoProjeto = 'src/themes';
    const directoryPath = path.join(process.cwd(), pastaDoProjeto);

    try {
        const files = fs.readdirSync(directoryPath).map(f => f.replace('.scss', ''));
        return NextResponse.json(files);
    }
    catch (error) {
        return NextResponse.json({ error });
    }
}