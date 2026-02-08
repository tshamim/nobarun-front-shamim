export const getCDNOptimizedUrl = (url: string | undefined | null): string => {
  if (!url) return '/images/placeholder.png'; // Return a placeholder if URL is missing
  
  // Define S3 bucket domains to replace
  const s3Domains = [
    'nobarunawsvideouploader.s3.ap-south-1.amazonaws.com',
    's3.ap-south-1.amazonaws.com/nobarunawsvideouploader',
    'nobarun.s3.us-east-2.amazonaws.com' // Handling potential legacy bucket usage
  ];



  let optimizedUrl = url;

  // Check if the URL contains any of the S3 domains
  for (const domain of s3Domains) {
    if (url.includes(domain)) {
      optimizedUrl = url.replace(domain, 'd1v2sbji1mlin2.cloudfront.net');
      
      // Ensure protocol is https
      if (optimizedUrl.startsWith('http://')) {
        optimizedUrl = optimizedUrl.replace('http://', 'https://');
      }
      break; 
    }
  }

  return optimizedUrl;
};
