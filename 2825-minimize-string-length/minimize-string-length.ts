function minimizedStringLength(s: string): number {
  const seen = new Set(s.split(""))
  return seen.size
    
};