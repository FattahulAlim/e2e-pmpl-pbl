<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\App;
use App\Models\User;
use App\Models\ApplicationTester;

class ApplicationTesterSeeder extends Seeder
{
    public function run(): void
    {
        // Aplikasi khusus E2E sengaja dikosongkan supaya bisa diambil lewat Playwright
        $applications = App::where('title', '!=', 'Aplikasi Uji E2E')->get();

        // Tester tetap: tester1 sampai tester12 (tester@gmail.com TIDAK ikut)
        $emails = collect(range(1, 12))->map(fn ($i) => "tester{$i}@gmail.com");

        $testers = User::whereIn('email', $emails)->orderBy('id')->get();

        if ($testers->count() < 12) {
            return;
        }

        foreach ($applications as $application) {
            foreach ($testers as $tester) {
                ApplicationTester::create([
                    'application_id' => $application->id,
                    'tester_id' => $tester->id,
                    'status' => 'active',
                ]);
            }
        }
    }
}