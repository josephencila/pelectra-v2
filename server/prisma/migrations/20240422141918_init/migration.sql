-- CreateTable
CREATE TABLE "Appliances" (
    "appliancesId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "appliancesName" TEXT NOT NULL,
    "consumptionPerHr" DECIMAL(10,3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appliances_pkey" PRIMARY KEY ("appliancesId")
);

-- CreateTable
CREATE TABLE "MonthlyAppliances" (
    "monthlyAppliancesId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "appliancesId" UUID NOT NULL,
    "appliancesName" TEXT NOT NULL,
    "consumptionPerHr" DECIMAL(10,3) NOT NULL,
    "dailyUsage" INTEGER NOT NULL,
    "daysInMonth" INTEGER NOT NULL,
    "consumptionPerMonth" DECIMAL(10,3) NOT NULL,
    "selectedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyAppliances_pkey" PRIMARY KEY ("monthlyAppliancesId")
);

-- CreateTable
CREATE TABLE "MonthlyExpenses" (
    "monthlyExpenseId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "actualConsumption" DECIMAL(10,3) NOT NULL,
    "actualBillExpense" INTEGER NOT NULL,
    "selectedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyExpenses_pkey" PRIMARY KEY ("monthlyExpenseId")
);
