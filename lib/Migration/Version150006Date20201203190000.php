<?php

namespace OCA\News\Migration;

use Closure;
use OCP\Migration\SimpleMigrationStep;
use OCP\Migration\IOutput;
use OCP\DB\ISchemaWrapper;

class Version150006Date20201203190000 extends SimpleMigrationStep {

    public function preSchemaChange(IOutput $output, Closure $schemaClosure, array $options) {}

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
        $schema = $schemaClosure();

        $table = $schema->getTable('news_items');

        $table->addColumn('uninteresting', 'boolean', [
            'notnull' => true,
            'default' => false,
        ]);

        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options) {}

}
