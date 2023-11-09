let channels = new Pusher('ddba2942e7a53c041da4', {
    cluster: 'us-2',
  });
  
  // Subscribe to the appropriate channel
  let channel = channels.subscribe('impresario-chat');
  
  // Bind a callback function to an event within the subscribed channel
  channel.bind('event-name', function (data) {
    // Do what you wish with the data from the event
  });
  
  async function pushData(data) {
    const res = await fetch('/api/channels-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error('failed to push data');
    }
  }