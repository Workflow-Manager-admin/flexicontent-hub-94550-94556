/**
 * Utility functions for content management
 */

/**
 * Formats a date string into a more readable format
 * 
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Gets the appropriate color class for a content status
 * 
 * @param {string} status - Content status
 * @returns {string} CSS class name for the status
 */
export const getStatusClass = (status) => {
  const statusMap = {
    published: 'status-published',
    draft: 'status-draft',
    archived: 'status-archived',
    scheduled: 'status-scheduled',
    pending: 'status-pending',
  };
  
  return statusMap[status.toLowerCase()] || 'status-default';
};

/**
 * Truncates text to a specified length
 * 
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength) + '...';
};

/**
 * Groups content items by a specified property
 * 
 * @param {Array} items - Content items
 * @param {string} property - Property to group by
 * @returns {Object} Grouped items
 */
export const groupContentBy = (items, property) => {
  return items.reduce((groups, item) => {
    const key = item[property];
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
};

/**
 * Filters content items by a search term
 * 
 * @param {Array} items - Content items
 * @param {string} searchTerm - Search term
 * @param {Array} fields - Fields to search in
 * @returns {Array} Filtered items
 */
export const searchContent = (items, searchTerm, fields = ['title', 'type']) => {
  if (!searchTerm) return items;
  
  const term = searchTerm.toLowerCase();
  return items.filter(item => 
    fields.some(field => 
      item[field] && item[field].toLowerCase().includes(term)
    )
  );
};

/**
 * Sorts content items by a specified field
 * 
 * @param {Array} items - Content items
 * @param {string} field - Field to sort by
 * @param {string} direction - Sort direction ('asc' or 'desc')
 * @returns {Array} Sorted items
 */
export const sortContent = (items, field = 'date', direction = 'desc') => {
  return [...items].sort((a, b) => {
    if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};
