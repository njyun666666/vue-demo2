export default interface IBase<T> {
  code: number;
  message: string;
  data: T;
}
