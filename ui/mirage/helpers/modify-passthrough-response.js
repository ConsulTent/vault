// passthrough request and modify response from server
// pass object as second arg of properties in response to override
export default function (req, props = {}) {
  return new Promise((resolve) => {
    const xhr = req.passthrough();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status < 300) {
          // XMLHttpRequest response prop only has a getter -- redefine as writable and set value
          Object.defineProperty(xhr, 'response', {
            writable: true,
            value: JSON.stringify({
              ...JSON.parse(xhr.responseText),
              ...props,
            }),
          });
        }
        resolve();
      }
    };
  });
}
