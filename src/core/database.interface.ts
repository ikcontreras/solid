export interface Database {
  readData<T>(path: string): Promise<T[] | undefined> ;
}
