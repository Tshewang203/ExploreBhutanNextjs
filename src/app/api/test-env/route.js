export async function GET() {
  return Response.json({
    hasUsername: !!process.env.ADMIN_USERNAME,
    hasPasswordHash: !!process.env.ADMIN_PASSWORD_HASH,
    hasSecret: !!process.env.NEXTAUTH_SECRET,
    hasUrl: !!process.env.NEXTAUTH_URL
  });
}