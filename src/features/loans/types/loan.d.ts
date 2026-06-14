export type Loan = {
    loanName: string;
    fromWhome: string;
    toAccount: string | null;
    amount: number;
    paidAmount: number;
    loanCreatedDay: Date;
    dueDate: Date;
    paymentDate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29;
    rate: number;
    isCompleted: boolean;
}