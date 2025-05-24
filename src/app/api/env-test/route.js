export async function GET() {
  return Response.json({
    username: process.env.ADMIN_USERNAME,
    hashPresent: !!process.env.ADMIN_PASSWORD_HASH,
    hashValue: process.env.ADMIN_PASSWORD_HASH?.substring(0, 10) + '...'
  });
}