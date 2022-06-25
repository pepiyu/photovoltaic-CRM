export function dateFormatter(date) {
    var date = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    return date.toLocaleDateString('es-ES', options);
  }
  