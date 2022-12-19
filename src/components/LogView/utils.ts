export const getRequestBlockData = (reqData: string): string[] => {
  if (reqData.includes('Request')) {
    const [request, ...rest] = reqData.trim().split(' ');
    return [request, rest.join(' ')];
  }
  const [response, status, ...rest] = reqData.trim().split(' ');
  return [`${response} ${status}`, rest.join(' ')];
};
