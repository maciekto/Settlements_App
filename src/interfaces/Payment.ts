interface Payment {
  id: string;
  name: string;
  amount: number;
  whopaid: {
    uid: string;
    value: Number;
  };
  users: {uid: string; value: Number; id: string;}[];
  date: string;
}