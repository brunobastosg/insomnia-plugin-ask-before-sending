module.exports = async function (context) {
  const currentMethod = context.request.getMethod();
  const envName = context.request.getEnvironment().getKeysContext().keyContext.askBeforeSending;
  const methodsThatNeedConfirmation = context.request.getEnvironmentVariable('askBeforeSending') || [];

  if (!methodsThatNeedConfirmation.includes(currentMethod)) {
    return;
  }

  const result = await context.app.prompt(`Sending ${currentMethod} request to ${envName} environment. Confirm?`, {
    label: 'Type "yes" to send',
    cancelable: true,
    submitName: 'Send',
  });

  if (result.toLowerCase() !== 'yes') {
    throw new Error('Request cancelled');
  }
}
