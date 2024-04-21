-- CreateTable
CREATE TABLE "Appliances" (
    "appliancesId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "appliancesName" TEXT NOT NULL,
    "consumptionPerHr" DECIMAL(10,3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appliances_pkey" PRIMARY KEY ("appliancesId")
);

-- CreateTable
CREATE TABLE "MonthlyListOfAppliances" (
    "appliancesListId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "appliancesId" UUID NOT NULL,
    "appliancesName" TEXT NOT NULL,
    "consumptionPerHr" DECIMAL(10,3) NOT NULL,
    "usagePerDay" INTEGER NOT NULL,
    "daysInMonth" INTEGER NOT NULL,
    "consumptionPerMonth" DECIMAL(10,3) NOT NULL,
    "selectedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyListOfAppliances_pkey" PRIMARY KEY ("appliancesListId")
);

-- CreateTable
CREATE TABLE "MonthlyListOfExpenses" (
    "expensesListId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "actualConsumption" DECIMAL(10,3) NOT NULL,
    "actualBillExpense" INTEGER NOT NULL,
    "selectedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyListOfExpenses_pkey" PRIMARY KEY ("expensesListId")
);
