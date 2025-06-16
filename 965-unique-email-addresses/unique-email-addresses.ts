function numUniqueEmails(emails: string[]): number {
  const filteredEmails = emails.map((email) => {
    const [local, domain] = email.split("@");
    const filteredLocal = local.replace(/\./g, "");

    return (
      (filteredLocal.includes("+")
        ? filteredLocal.substring(0, filteredLocal.indexOf("+"))
        : filteredLocal) +
      "@" +
      domain
    );
  });

  const sendEmails = new Set(filteredEmails);
  return sendEmails.size;
};