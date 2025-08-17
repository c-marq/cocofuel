export function html(params: { url: string; host: string; theme: any }) {
  const { url, host } = params;
  
  const escapedHost = host.replace(/\./g, "&#8203;.");
  
  return `
<body style="background: #f9f9f9;">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: #f9f9f9; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: #444;">
        Sign in to <strong>Cocofuel</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="#FF6B4A">
              <a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; padding: 15px 25px; border: 1px solid #FF6B4A; display: inline-block; font-weight: bold;">
                Sign in to Cocofuel
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #444;">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 20px 0px 0px 0px; font-size: 12px; line-height: 16px; font-family: Helvetica, Arial, sans-serif; color: #898989;">
        This email was intended for ${escapedHost}
      </td>
    </tr>
  </table>
</body>
`;
}

export function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
