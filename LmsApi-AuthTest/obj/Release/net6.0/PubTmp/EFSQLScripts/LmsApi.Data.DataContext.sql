IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220710175731_InitialMigration')
BEGIN
    CREATE TABLE [BookDetails] (
        [BId] int NOT NULL IDENTITY,
        [BName] nvarchar(max) NOT NULL,
        [BAuthor] nvarchar(max) NOT NULL,
        [BQuantity] int NOT NULL,
        CONSTRAINT [PK_BookDetails] PRIMARY KEY ([BId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220710175731_InitialMigration')
BEGIN
    CREATE TABLE [IssueDetails] (
        [TId] int NOT NULL IDENTITY,
        [UName] nvarchar(max) NULL,
        [BId] int NULL,
        [Status] nvarchar(max) NULL,
        [DateOfIssue] datetime2 NULL,
        [DateofSubmission] datetime2 NULL,
        [DateOfReturn] datetime2 NULL,
        [Fine] int NULL,
        CONSTRAINT [PK_IssueDetails] PRIMARY KEY ([TId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220710175731_InitialMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220710175731_InitialMigration', N'6.0.6');
END;
GO

COMMIT;
GO

